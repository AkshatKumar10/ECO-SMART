
import React, { useState, useEffect } from "react";
import "./Services.css";
import dropoff from "./dropoff.png";
import pickup from "./pickup.png";
import { useHistory } from "react-router-dom";
import { auth } from './firebase'; // Assuming you're using Firebase

const ServiceCard = ({ image, title, description, isLoggedIn, buttonText, onClick }) => {
  return (
    <div className="service-card">
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
      {isLoggedIn ? (
        <button
          className="know-btn"
          type="button"
          id="schedule-btn"
          onClick={onClick}
          target="_blank"
        >
          {buttonText}
        </button>
      ) : (
        <h5 className="confirm1" id="checkauth1">
          Please login to use our services
        </h5>
      )}
    </div>
  );
};

const Services = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const history = useHistory();

  useEffect(() => {
    // Check Firebase auth state on component mount
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  const handleKnowMoreClick = () => {
    setShowMap(true);
  };

  const handleCloseMapClick = () => {
    setShowMap(false);
  };

  const submit = () => {
    history.push("/pickup");
  };

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <h2 className="services-title">Our Services</h2>
        <p className="services-intro">
          We offer a wide range of services aimed at effective waste management,
          segregation, and sanitization to promote a cleaner, greener
          environment.
        </p>

        <div className="services-cards">
          <ServiceCard
            image={pickup}
            title="Schedule a Pickup"
            description="Book a pickup online for hassle-free and efficient waste management."
            isLoggedIn={isLoggedIn}
            buttonText="Schedule"
            onClick={submit}
          />

          <ServiceCard
            image={dropoff}
            title=" Drop-off"
            description="Deliver your bulky, dangerous, or recyclable things to the places we've marked."
            isLoggedIn={isLoggedIn}
            buttonText="Know More"
            onClick={handleKnowMoreClick}
          />
        </div>

        {showMap && (
          <div className="map" style={{ position: "absolute" }} id="map">
            <iframe
              src="https://www.google.com/maps/d/u/3/embed?mid=1QksU38nQXue77uTcVDQeaYoGBInmeLA&ehbc=2E312F"
              width="100%"
              height="100%"
              allowFullScreen="allowFullScreen"
            />
            <button type="button" className="btn" onClick={handleCloseMapClick}>
              Close
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;



