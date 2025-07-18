"use client";
import React, { useState } from 'react';
import Navbar from '../components/Navbar';

export default function LoginPage() {
  const [form, setForm] = useState({ username: '', password: '', role: 'user' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Logging in as ${form.role}: ${form.username}`);
    // Here you would handle authentication logic
  };

  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: 'center' }}>Login</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: 320, margin: '32px auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <input name="username" placeholder="Username" value={form.username} onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
        <select name="role" value={form.role} onChange={handleChange}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Login</button>
      </form>
    </div>
  );
} 