'use client';

import { useState } from 'react';
import { invoke } from '@tauri-apps/api/core';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await invoke<string>('login', { username, password });
      setMessage(response); // Response could be a success message or token.
    } catch (error) {
      console.error(error);
      setMessage('Login failed. Please try again.');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '300px', margin: 'auto', textAlign: 'center' }}>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px' }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px' }}
      />
      <button
        onClick={handleLogin}
        style={{ padding: '10px 20px', cursor: 'pointer' }}
      >
        Login
      </button>
      {message && <p style={{ marginTop: '10px' }}>{message}</p>}
    </div>
  );
}
