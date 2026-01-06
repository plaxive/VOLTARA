import { useState } from "react";
import "./styles/Section.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="container nav-inner">

        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        {/* Desktop */}
        <div className="nav-right">
          <ul className="nav-list">
            <li>Home</li>
            <li>Services</li>
            <li>Cars</li>
            <li>Contact</li>
          </ul>

          <div className="search">
            <i className="bi bi-search"></i>
            <input type="search" placeholder="Search..." />
          </div>
        </div>

        {/* Hamburger */}
        <div className="menu-icon" onClick={() => setOpen(prev => !prev)}>
          <i className={`bi ${open ? "bi-x" : "bi-list"}`}></i>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Cars</li>
          <li>Contact</li>
        </ul>

        <div className="search mobile-search">
          <i className="bi bi-search"></i>
          <input type="search" placeholder="Search..." />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
