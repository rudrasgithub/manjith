import React, { useState } from 'react';
import '../css/Signup.css'; // Importing CSS file for styling
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigator=useNavigate()
  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form>
        <div className="input-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <button  onClick={()=>{
          navigator('/home')
        }} type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
