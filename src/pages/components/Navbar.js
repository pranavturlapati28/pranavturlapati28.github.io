import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo"> Pranav Turlapati</div> {/* Combined names */}
            <ul className="navbar-links">
                <li className="navbar-item"><Link to="/">Home</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
