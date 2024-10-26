import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import { db } from './firebase'; // Import Firestore db instance
import './PickupForm.css';

const PickupForm = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    date: '',
    time: '',
    notes: '',
    wasteTypes: {
      Household: false,
      Recyclable: false,
      Industrial: false,
      Hazardous: false,
    },
    recyclableDetails: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData({
        ...formData,
        wasteTypes: {
          ...formData.wasteTypes,
          [name]: checked,
        },
      });
    } else {
      if (name === 'time') {
        const selectedTime = value;
        const startTime = '06:00';
        const endTime = '20:00';

        if (selectedTime < startTime || selectedTime > endTime) {
          alert('Please select a pickup time between 6:00 AM and 8:00 PM');
          e.target.value = '';
        } else {
          setFormData({
            ...formData,
            [name]: value,
          });
        }
      } else {
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if form data is empty
    if (!formData.name || !formData.email || !formData.phone || !formData.address || !formData.date || !formData.time) {
      alert('Please fill out all the required fields!');
      return;
    }

    try {
      // Submit form data to Firestore
      await addDoc(collection(db, 'pickupRequests'), {
        ...formData,
        timestamp: new Date(),
      });

      alert(`Pickup Scheduled for ${formData.name} on ${formData.date} at ${formData.time}`);
      history.push('/'); // Redirect to home page

      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        date: '',
        time: '',
        notes: '',
        wasteTypes: {
          Household: false,
          Recyclable: false,
          Industrial: false,
          Hazardous: false,
        },
        recyclableDetails: '',
      });
    } catch (error) {
      console.error('Error scheduling pickup:', error);
      alert('There was an error scheduling your pickup. Please try again.');
    }
  };

  return (
    <section className="pickup-form-section" id="pickupform">
      <h2 className="pickup-form-title">Request a Waste Pickup</h2>
      <p>Fill out the form below to arrange a convenient pickup time that suits you!</p>
      <div className='container'>
        <form className="pickup-form" onSubmit={handleSubmit}>
          {/* Personal Details */}
          <h3>Personal Details</h3>

          {/* Name field */}
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />

          {/* Email field */}
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />

          {/* Phone field */}
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />

          {/* Pickup Details */}
          <h3>Pickup Details</h3>

          {/* Address field */}
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address"
            required
          />

          {/* Date field */}
          <label htmlFor="date">Preferred Pickup Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            required
          />

          {/* Time field */}
          <label htmlFor="time">Estimated Pickup Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />

          {/* Additional Notes */}
          <label htmlFor="notes">Additional Notes:</label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Any special instructions?"
            rows="3"
            style={{ resize: "none" }}
          ></textarea>

          {/* Recyclable Waste Details */}
          <h3>Recyclable Waste Details</h3>

          <label>Types of Waste:</label>
          <div className="waste-types">
            <label>
              <input
                type="checkbox"
                name="Household"
                checked={formData.wasteTypes.Household}
                onChange={handleChange}
              />
              Household
            </label>
            <label>
              <input
                type="checkbox"
                name="Industrial"
                checked={formData.wasteTypes.Industrial}
                onChange={handleChange}
              />
              Industrial
            </label>
            <label>
              <input
                type="checkbox"
                name="Recyclable"
                checked={formData.wasteTypes.Recyclable}
                onChange={handleChange}
              />
              Recyclable
            </label>
            <label>
              <input
                type="checkbox"
                name="Hazardous"
                checked={formData.wasteTypes.Hazardous}
                onChange={handleChange}
              />
              Hazardous
            </label>
          </div>

          {/* Recyclable Details */}
          <label htmlFor="recyclableDetails">Details of Recyclable Waste:</label>
          <textarea
            id="recyclableDetails"
            name="recyclableDetails"
            value={formData.recyclableDetails}
            onChange={handleChange}
            placeholder="Describe the recyclable waste"
            rows="4"
            style={{ resize: "none" }}
          ></textarea>

          {/* Submit Button */}
          <button type="submit" className="submit1-btn">Schedule Pickup</button>
        </form>
      </div>
    </section>
  );
};

export default PickupForm;
