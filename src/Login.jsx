import React, { useState } from 'react';
import './styles/Login.css';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
        credentials: 'include', 
      });

      if (response.status === 200) {
        const data = await response.json();
        onLogin(data.sessionId, data.username); 
      } else {
        const errorData = await response.json();
        if (response.status === 400) {
          alert(errorData.error || 'Username is required and must be alphanumeric.');
        } else if (response.status === 403) {
          alert(errorData.error || 'This username is not allowed.');
        } else {
          alert(errorData.error || 'Login failed. Please try again.');
        }
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred during login. Please try again later.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

