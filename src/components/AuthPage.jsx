import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../slices/authSlice.js";

export default function AuthPage() {
  const [isRegister, setIsRegister] = useState(false);
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.auth);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = e => {
    e.preventDefault();
    if (isRegister) dispatch(registerUser(form));
    else dispatch(loginUser({ email: form.email, password: form.password }));
  };

  return (
    <div style={{ maxWidth: 400, margin: "50px auto", padding: 30, border: "1px solid #ccc", borderRadius: 8 }}>
      <h2>{isRegister ? "Register" : "Login"}</h2>
      <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {isRegister && <input name="username" placeholder="Username" value={form.username} onChange={handleChange} required />}
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
        <button type="submit" disabled={loading}>{loading ? "Processing..." : (isRegister ? "Register" : "Login")}</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button style={{ marginTop: 10 }} onClick={() => setIsRegister(!isRegister)}>
        {isRegister ? "Already have account? Login" : "No account? Register"}
      </button>
    </div>
  );
}
