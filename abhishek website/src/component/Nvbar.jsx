import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Nvbar = () => {
  return (
    <div>
      <nav>
        <ul className="navbar">
          <Link to="/"><li>Home</li></Link>
          <Link to="/product"><li>Products</li></Link>
          <Link to="/partner"><li>Partners</li></Link>
          <Link to="/about"><li>About us</li></Link>
          <Link to="/newsroom"><li>Newsroom</li></Link>  
        </ul>
      </nav>
    </div>
  );
};

export default Nvbar;
