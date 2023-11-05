import React from 'react';
import './about.css';
import NavbarT from '../Navbar/NavbarT'
import Footer from '../Footer/Footer';

function About() {
  return (
    <div className="about-page">
      <NavbarT />
      <h1>About Us</h1>
      <p>Welcome to our company. We are a team of passionate individuals...</p>
      {/* Add more content as needed */}
      <Footer />
    </div>
  );
}

export default About;