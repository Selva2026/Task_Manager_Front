import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks, addTask, toggleTask, deleteTask } from "../slices/tasksSlice.js";
import { logout } from "../slices/authSlice.js";

export default function TasksPage() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const { tasks, loading } = useSelector(state => state.tasks);

  useEffect(() => { dispatch(fetchTasks()); }, [dispatch]);

  return (
    <div style={{ maxWidth: 600, margin: "30px auto", padding: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2>My Tasks</h2>
        <button onClick={() => dispatch(logout())}>Logout</button>
      </div>

      <form onSubmit={e => { e.preventDefault(); if(title) dispatch(addTask(title)); setTitle(""); }} style={{ display: "flex", gap: 10, marginTop: 20 }}>
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="New task..." style={{ flex: 1, padding: 8 }} />
        <button type="submit">Add</button>
      </form>

      {loading ? <p>Loading tasks...</p> :
        <ul style={{ listStyle: "none", padding: 0, marginTop: 20 }}>
          {tasks.map(t => (
            <li key={t._id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: 8, borderBottom: "1px solid #eee" }}>
              <span style={{ textDecoration: t.status === "Completed" ? "line-through" : "none" }}>{t.title}</span>
              <div style={{ display: "flex", gap: 5 }}>
                <button onClick={() => dispatch(toggleTask(t._id))}>{t.status === "Pending" ? "Complete" : "Undo"}</button>
                <button onClick={() => dispatch(deleteTask(t._id))}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      }
    </div>
  );
}
