import React from "react";
import "./AboutUs.css";
import { useEffect } from "react";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      offset: 200,
      delay: 100,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div id="aboutus">
      <div className="hero-aboutus">
        <h1 data-aos="zoom-in">
          <b>About Us</b>
        </h1>
        <p>
          <Typewriter
            options={{
              autoStart: true,
              loop: false,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "We are committed to building a cleaner and greener future"
                )
                .pauseFor(500)
                .typeString(
                  "<br/>by offering innovative solutions for waste segregation, disposal, and sanitization."
                )
                .start();
            }}
          />
        </p>
      </div>

      <div className="about-us-video">
        <div className="aboutus-1">
          <h2 data-aos="zoom-in-up">Why Waste Management Matters</h2>
          <p data-aos="zoom-in" data-aos-delay="1000">
            Waste management plays a crucial role in protecting the environment
            by reducing pollution and preserving natural ecosystems. It also
            safeguards public health by preventing the spread of diseases and
            limiting exposure to hazardous waste materials. Watch this short
            video to understand the impact of improper waste management and how
            our platform can help solve this critical issue.
          </p>
        </div>
        <iframe
          width={560}
          height={315}
          src="https://www.youtube.com/embed/4JDGFNoY-rQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          data-aos="zoom-in-up"
        />
      </div>
    </div>
  );
};

export default AboutUs;
