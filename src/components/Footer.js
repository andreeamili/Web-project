import React from "react";
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <footer>
        <div className="footer-content">
          <div className="contact-info">
            <h3>Contact</h3>
            <p>Adress: Strada Semaforului 11, Sibiu</p>
            <p>Phone: 0749.222.222 / 0742.222.222</p>
            <p>Email:  EquestrianCSM@yahoo.com</p>
          </div>
          <div className="quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/services">Price</Link></li>
              <li><Link to="/our-team">Our team</Link></li>
              <li><Link to="/competitions">Competitions</Link></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="social-links">
            <h3>Urmăriți-ne</h3>
            <ul>
              <li><a href="https://www.facebook.com/centruechitatie">Facebook</a></li>
              <li><a href="https://www.instagram.com/centruechitatie">Instagram</a></li>
              <li><a href="https://twitter.com/centruechitatie">Twitter</a></li>
              <li><a href="https://www.youtube.com/centruechitatie">YouTube</a></li>
            </ul>
          </div>
        </div>
        <div className="legal-info">
          <p>&copy; 2023 Csm Sibiu Equestrian Baze. All the rights are reserved.</p>
          <p><a href="/politica-confidentialitate">privacy policy</a></p>
        </div>
      </footer>
    );
}
export default Footer
