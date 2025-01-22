import React from "react";
import "../style.css";

const Education = () => (
  <section id="education" className="education">
    <div className="container">
      <h2 className="education__title">Education</h2>
      <div className="education__content">
        <div className="education__item">
          <h3>Java Full Stack</h3>
          <p>Besant Technologies, Chennai | 2024</p>
        </div>
        <div className="education__divider"></div>
        <div className="education__item">
          <h3>Bachelor's Degree in Computer Science</h3>
          <p>
            Sri Ramakrishna Engineering College, Coimbatore | CGPA: 8.06 |
            2020-2024
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
