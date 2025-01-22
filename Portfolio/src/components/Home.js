import React from 'react';
import '../style.css';

const Home = () => (
    <section className="home" id="home">
      <div className="container">
        <h2>Welcome to My Portfolio</h2>
        <p>I'm a passionate Computer Science graduate with a strong 
            <br/>foundation in programming and software development.</p>
        <a href="#about" className="btn">Learn More</a>
        <img src="/Images/Profile1.jpg" alt="Profile Photo" className="profile-photo" />
      </div>
    </section>
  );
  
  
  export default Home;