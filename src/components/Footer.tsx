import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import './Footer.css';

const Footer = () => (
  <footer className="footer font-small">
    <div className="container-fluid d-flex justify-content-end">
      <div className="icon-container">
        <a href="https://github.com/adom2128" target="_blank">
          <FontAwesomeIcon icon={faGithub as IconProp} fontSize="30" />
        </a>
        <a href="https://www.linkedin.com/in/adom2128/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin as IconProp} fontSize="30" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
