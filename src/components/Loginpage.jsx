import React, { useState } from 'react';
import styles from './Login.css';
import './Login.css';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // validate input
    if (!username || !password) {
      setError('Please enter a username and password');
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }
    if (!/\d/.test(password)) {
      setError('Password must contain at least one number');
      return;
    }
    // send data to server
    setError('');
    // ...
  };

  return (
    <div className='Login'>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        {error && <p className={styles.error}>{error}</p>}
        <label htmlFor="username">
          <span className='username'>Username</span>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label htmlFor="password">
          <span className='text04'>Password</span>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button className='text06' type="submit">
          Sign In
        </button>
      </form>
      <a href="#" className='text08'>
        Sign up
      </a>
      <a href="#" className='text10'>
        Forget password
      </a>
    </div>
  );
};

export default Login;
