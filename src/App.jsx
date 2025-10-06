import React from "react";
import { useSelector } from "react-redux";
import AuthPage from "./components/AuthPage.jsx";
import TasksPage from "./components/TasksPage.jsx";

export default function App() {
  const { token } = useSelector(state => state.auth);
  return token ? <TasksPage /> : <AuthPage />;
}
