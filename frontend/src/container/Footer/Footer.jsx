import React from 'react';
import './Footer.css';
import { images } from '../../constants';
import { BsFacebook, BsTwitter, BsLinkedin, BsEnvelope, BsTelephone, BsGeoAlt } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={images.logofooter} alt="Positivus logo" className="img-fluid" />
        </div>
        
        <nav className="footer-nav">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Testimonials</a></li>
          </ul>
        </nav>
        
        <div className="footer-social">
          <a href="https://www.facebook.com/vrindavana.yadav"><BsFacebook /></a>
          <a href="https://www.facebook.com/vrindavana.yadav"><BsTwitter /></a>
          <a href="https://www.facebook.com/vrindavana.yadav"><BsLinkedin /></a>
        </div>
      </div>
      
      <div className="footer-middle">
        <div className="contact-info">
          <h3>Contact us</h3>
          <ul>
            <li>
              <BsEnvelope className="contact-icon" />
              <span>Email: waqtavarinstrument@gmail.com</span>
            </li>
            <li>
              <BsTelephone className="contact-icon" />
              <span>Phone: +91-9106313310</span>
            </li>
            <li>
              <BsGeoAlt className="contact-icon" />
              <span>Address: THIRD FLOOR, SHED NO- 08, GIDC MULTI LEVEL SHED,NEAR ADARSH ESTATE, Phase- 3 GIDC Chhatral,Gandhinagar, Gujarat, 382729</span>
            </li>
          </ul>
        </div>
        
        <div className="company-info">
          <h3>Company Details</h3>
          <ul>
            <li>WAQTAVAR INSTRUMENT</li>
            <li>THIRD FLOOR, SHED NO- 08, GIDC MULTI LEVEL SHED</li>
            <li>NEAR ADARSH ESTATE, Phase- 3 GIDC Chhatral</li>
            <li>Gandhinagar, Gujarat, 382729</li>
            <li>Phone: 9106313310 - MSME NO: YDYAM-GJ-09-0016322</li>
            <li>Email: waqtavarinstrument@gmail.com</li>
            <li>GSTIN: 24AFNPY2159J1ZV</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2025 Waqtavar Instrument. All Rights Reserved.</p>
        <a href="#">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;