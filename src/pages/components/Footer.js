// src/pages/components/Footer.js
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Import icons
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Pranav Turlapati. All rights reserved.</p>
        <div className="social-icons">
          <a
            className="icon"
            href="https://github.com/pranavturlapati28"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            className="icon"
            href="https://www.linkedin.com/in/pranavturlapati/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            className="icon"
            href="mailto:pranavturlapati02@gmail.com" // Add your Gmail here
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
