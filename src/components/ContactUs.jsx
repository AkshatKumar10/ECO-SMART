import React, { useState } from 'react';
import './ContactUs.css';
import { db } from './firebase'; // Ensure your firebase.js file exports `db` correctly
import { collection, addDoc } from 'firebase/firestore'; // Import Firestore functions

const ContactUs = () => {
  const [formType, setFormType] = useState('general');
  const [name, setName] = useState('');
  const [phNo, setPhNo] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [company, setCompany] = useState('');
  const [proposal, setProposal] = useState('');
  const [error, setError] = useState(''); // State to store error messages

  const handleFormTypeChange = (type) => {
    setFormType(type);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      name,
      phNo,
      email,
      message: formType === 'general' ? message : '',
      company: formType === 'collaborate' ? company : '',
      proposal: formType === 'collaborate' ? proposal : '',
      timestamp: new Date(), // Adding a timestamp for each submission
    };

    try {
      const contactFormsCollection = collection(db, 'contact-forms');
      await addDoc(contactFormsCollection, formData);
      console.log('Form data sent to Cloud Firestore!');

      // Reset form fields
      setName('');
      setPhNo('');
      setEmail('');
      setMessage('');
      setCompany('');
      setProposal('');
      setError(''); // Clear any previous errors

      // Show alert message
      alert('Your form has been submitted successfully!');
    } catch (error) {
      console.error('Error sending form data to Cloud Firestore:', error);
      setError('Failed to submit form. Please try again later.'); // Set error message
    }
  };

  return (
    <section className="contact-us-section" id="contactus">
      <h2 className="contact-us-title">Contact Us</h2>
      <p className="contact-us-description">
        For complaints, suggestions, enquiries, or collaboration opportunities, reach out to us using the appropriate form below.
      </p>

      <div className="form-type-buttons">
        <button
          className={`form-type-btn ${formType === 'general' ? 'active' : 'inactive'}`}
          onClick={() => handleFormTypeChange('general')}
        >
          Complaints & Suggestions
        </button>
        <button
          className={`form-type-btn ${formType === 'collaborate' ? 'active' : 'inactive'}`}
          onClick={() => handleFormTypeChange('collaborate')}
        >
          Collaborate with Us
        </button>
      </div>

      {/* Conditional rendering of form based on selected option */}
      {formType === 'general' ? (
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your Name"
            required
          />

          <label htmlFor="phno">Phone Number:</label>
          <input
            type="tel"
            id="phno"
            value={phNo}
            onChange={(e) => setPhNo(e.target.value)}
            inputMode="numeric"
            pattern="[0-9]{10,14}"
            placeholder="Enter your phone number"
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your complaints, suggestions, or enquiries"
            rows="5"
            style={{resize:"none"}}
            required
          ></textarea>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="company">Company Name:</label>
          <input
            type="text"
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Enter your company name"
            required
          />

          <label htmlFor="phno">Phone Number:</label>
          <input
            type="tel"
            id="phno"
            value={phNo}
            onChange={(e) => setPhNo(e.target.value)}
            inputMode="numeric"
            pattern="[0-9]{10,14}"
            placeholder="Enter your phone number"
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />

          <label htmlFor="proposal">Collaboration Proposal:</label>
          <textarea
            id="proposal"
            value={proposal}
            onChange={(e) => setProposal(e.target.value)}
            placeholder="Enter your collaboration proposal"
            rows="5"
            style={{resize:"none"}}
            required
          ></textarea>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      )}

      {/* Display error message if there is an error */}
      {error && <p className="error-message">{error}</p>}
    </section>
  );
};

export default ContactUs;
