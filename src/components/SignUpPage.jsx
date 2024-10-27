

import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useHistory } from 'react-router-dom'; // Use useHistory for v5
import { auth } from './firebase'; // Import Firebase auth
import './Auth.css';

const SignUpPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState(null);
  const history = useHistory(); // Initialize history

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all fields.');
      setTimeout(() => setError(null), 3000); // Clear error message after 3 seconds
      return;
    }
  
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      setTimeout(() => setError(null), 3000); // Clear error message after 3 seconds
      return;
    }
  
    try {
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      console.log('Sign Up successful');
      history.push('/login'); // Redirect to login page on successful sign-up
    } catch (error) {
      setError(error.message);
      setTimeout(() => setError(null), 3000); // Clear error message after 3 seconds
      if (error.code === 'auth/email-already-in-use') {
        setError('Email address already in use.');
        setTimeout(() => setError(null), 3000); // Clear error message after 3 seconds
      }
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Sign Up</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

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

        <label>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm your password"
          required
        />

        <button type="submit" className="auth-btn">Sign Up</button>
      </form>
      {error && <p className="error">{error}</p>} {/* Display error message */}
      <p className="auth-footer">Already have an account? <a href="/login">Login</a></p>
    </div>
  );
};

export default SignUpPage;

