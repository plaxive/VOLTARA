

import "./styles/Section.css";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <img src={logo} alt="logo" />
          <p>
            Driving the future with electric innovation, performance,
            and sustainable design.
          </p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Services</h4>
          <ul>
            <li>Buy a car</li>
            <li>Sell a car</li>
            <li>Financing</li>
            <li>Support</li>
          </ul>
        </div>

        {/* Social */}
        <div className="footer-social">
          <h4>Follow us</h4>
          <div className="icons">
            <i className="bi bi-instagram"></i>
            <i className="bi bi-twitter-x"></i>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-youtube"></i>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} EV Motion. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
