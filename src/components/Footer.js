import React from "react";
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <div>
        <div className="footer-content">
          <div className="info">
            <h3 className="top">Contact</h3>
            <p>Adress: Strada Semaforului 11, Sibiu</p>
            <p>Phone: 0749.222.222 / 0742.222.222</p>
            <p>Email:  EquestrianCSM@yahoo.com</p>
            <p className="down">&copy; 2023 Csm Sibiu Equestrian Baze. All the rights are reserved.</p>
          </div>
         </div>
      </div>
    );
}
export default Footer
