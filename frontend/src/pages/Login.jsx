import React, { useState } from 'react';
import '../css/Login.css'; // Importing CSS file for styling
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 const navigator=useNavigate()
  const handleLogin = () => {
    // Handle login logic here
    console.log('Logging in with:', { username, password });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={()=>{
          navigator('/home')
        }} type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
