import React from "react";
import "../style.css";

const Skills = () => (
  <section className="skills" id="skills">
    <div className="container">
      <h2 className="skills__title">My Skills</h2>
      <span className="skills__subtitle">
        Here are some of the skills I possess
      </span>
      <div className="skills__container">
        <div className="skills__content">
          <div className="skills__item">
            <img src="/Images/html.png" alt="HTML5" className="skills__logo" />
            <span className="skills__name">HTML5</span>
            <div className="progress">
              <div className="progress__inner" style={{ width: "90%" }}></div>
            </div>
            <span className="skills__percentage">90%</span>
          </div>
          <div className="skills__item">
            <img src="/Images/CSS3_logo.png" alt="CSS3" className="skills__logo" />
            <span className="skills__name">CSS3</span>
            <div className="progress">
              <div className="progress__inner" style={{ width: "85%" }}></div>
            </div>
            <span className="skills__percentage">85%</span>
          </div>
          <div className="skills__item">
            <img
              src="/Images/javascript.png"
              alt="JavaScript"
              className="skills__logo"
            />
            <span className="skills__name">JavaScript</span>
            <div className="progress">
              <div className="progress__inner" style={{ width: "85%" }}></div>
            </div>
            <span className="skills__percentage">85%</span>
          </div>
        </div>
        <div className="skills__content">
          <div className="skills__item">
            <img src="/Images/reactjs.png" alt="React.js" className="skills__logo" />
            <span className="skills__name">React.js</span>
            <div className="progress">
              <div className="progress__inner" style={{ width: "75%" }}></div>
            </div>
            <span className="skills__percentage">75%</span>
          </div>
          <div className="skills__item">
            <img src="/Images/java.png" alt="Java" className="skills__logo" />
            <span className="skills__name">Java</span>
            <div className="progress">
              <div className="progress__inner" style={{ width: "80%" }}></div>
            </div>
            <span className="skills__percentage">80%</span>
          </div>
          <div className="skills__item">
            <img src="/Images/mysql.png" alt="MySQL" className="skills__logo" />
            <span className="skills__name">MySQL</span>
            <div className="progress">
              <div className="progress__inner" style={{ width: "85%" }}></div>
            </div>
            <span className="skills__percentage">85%</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
