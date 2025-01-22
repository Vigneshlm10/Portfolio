import React from "react";
import "../style.css";

const Portfolio = () => (
  <section className="portfolio" id="portfolio">
    <div className="container">
      <h2 className="portfolio__title">My Portfolio</h2>
      <div className="portfolio__content">
        {/* Portfolio Items */}
        {[
          {
            imgSrc: "/Images/crop.jpg",
            title: "Agricultural Service Website",
            description:
              "Developed a responsive static website using HTML, CSS, and Bootstrap for agriculture-related information and services.",
          },
          {
            imgSrc: "/Images/portfolio.png",
            title: "Portfolio Website",
            description:
              "Created a personal portfolio with HTML, CSS, and JavaScript.",
          },
          {
            imgSrc: "/Images/project3.jpg",
            title: "Project 3",
            description:
              "Project 3 is a full-stack application built with React.js and Node.js.",
          },
        ].map((project, index) => (
          <div key={index} className="portfolio__item">
            <img
              src={project.imgSrc}
              alt={`Project ${index + 1}`}
              className="portfolio__image"
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <button className="portfolio__button">View Project</button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;
