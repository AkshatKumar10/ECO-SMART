

 
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useHistory } from 'react-router-dom';
import { auth } from './firebase';
import './Auth.css';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError('Please fill in both email and password.');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      console.log('Login successful');
      history.push('/'); // Redirect to home page on successful login
    } catch (error) {
      setError(error.message);
      if (error.code === 'auth/invalid-email') {
        setError('Invalid email address.');
      } else if (error.code === 'auth/wrong-password') {
        setError('Wrong password.');
      }
    }
  };

  return (
    <div className="auth-container" id="login-pg">
      <h2 className="auth-title">Login</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
        />
        <button type="submit" className="auth-btn">Login</button>
      </form>
      {error && <p className="error">{error}</p>}
      <p className="auth-footer">Don't have an account? <a href="/signup">Sign Up</a></p>
    </div>
  );
};

export default LoginPage;


