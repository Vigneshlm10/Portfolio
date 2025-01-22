import React from "react";
import "../style.css";


const About = () => (
  <section className="about-us-section" id="about">
    <div className="container">
      <h2>About Me</h2>
      <div className="content">
        <img
          src="/Images/Profile.jpg "
          alt="Profile Photo"
          className="profile-photo"
        />
        <div className="text">
          <p>
            Hello! I'm Vignesh S, a Computer Science graduate with a passion for
            web development and problem-solving. As a fresher, I am eager to
            learn and grow in a collaborative environment while contributing to
            innovative software solutions with dedication and enthusiasm.
          </p>
          <p>
            I love staying updated on industry trends and am always ready to
            learn new technologies to solve real-world problems.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
