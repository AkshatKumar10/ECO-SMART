

import React from "react";
import "./Home.css";
import { useHistory } from "react-router-dom";
import { auth } from "./firebase";

const Home = () => {
  const history = useHistory();
  const user = auth.currentUser;

  const handleLogout = () => {
    auth.signOut().then(() => {
      history.push("/login"); // Redirect to login page
    });
  };

  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          {!user ? (
            <>
              <h1>Transforming Waste into Resources for a Greener Tomorrow</h1>
              <p>
                Join us in making waste management easier for a sustainable
                future.
              </p>
              <div className="cta-buttons">
                <button
                  className="cta-btn"
                  onClick={() => history.push("/signup")}
                >
                  Get Started
                </button>
                <button
                  className="cta-btn secondary"
                  onClick={() => history.push("/learn-more")}
                >
                  Learn More
                </button>
              </div>
            </>
          ) : (
            <div className="logout-msg">
              <h1>Transforming Waste into Resources for a Greener Tomorrow</h1>
              <p>
                Join us in making waste management easier for a sustainable
                future.
              </p>
              <h2>Welcome to EcoSmart </h2>
              {user && (
                <button className="logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              )}
            </div>
          )}
        </div>
        <div className="image">
          <img
            src="https://static.vecteezy.com/system/resources/previews/004/341/571/original/waste-management-eco-friendly-living-2d-web-banner-poster-garbage-separation-man-and-woman-sorting-trash-flat-characters-on-cartoon-background-printable-patches-colorful-web-elements-vector.jpg"
            alt="Hero"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
