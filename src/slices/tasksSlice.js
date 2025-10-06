import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../api.js";

const initialState = {
  tasks: [],
  loading: false,
  error: null
};

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async (_, { rejectWithValue }) => {
  try {
    const res = await API.get("/tasks");
    return res.data;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || "Failed to fetch tasks");
  }
});

export const addTask = createAsyncThunk("tasks/addTask", async (title, { rejectWithValue }) => {
  try {
    const res = await API.post("/tasks", { title });
    return res.data;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || "Failed to add task");
  }
});

export const toggleTask = createAsyncThunk("tasks/toggleTask", async (id, { rejectWithValue }) => {
  try {
    const res = await API.put(`/tasks/${id}`);
    return res.data;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || "Failed to toggle task");
  }
});

export const deleteTask = createAsyncThunk("tasks/deleteTask", async (id, { rejectWithValue }) => {
  try {
    await API.delete(`/tasks/${id}`);
    return id;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || "Failed to delete task");
  }
});

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchTasks.pending, state => { state.loading = true; state.error = null; })
      .addCase(fetchTasks.fulfilled, (state, action) => { state.loading = false; state.tasks = action.payload; })
      .addCase(fetchTasks.rejected, (state, action) => { state.loading = false; state.error = action.payload; })
      .addCase(addTask.fulfilled, (state, action) => { state.tasks.unshift(action.payload); })
      .addCase(toggleTask.fulfilled, (state, action) => {
        const index = state.tasks.findIndex(t => t._id === action.payload._id);
        if (index !== -1) state.tasks[index] = action.payload;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter(t => t._id !== action.payload);
      });
  }
});

export default tasksSlice.reducer;
