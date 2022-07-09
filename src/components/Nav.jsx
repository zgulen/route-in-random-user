import React from "react";
import {Link } from "react-router-dom";
import "./Nav.css"

const Nav = () => {
    return (
        <nav>
            <img src="./logo.png" alt="Food Truck" />
            <ul className="nav">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
