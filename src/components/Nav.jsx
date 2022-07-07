import React from "react";
import { Navigate, Link } from "react-router-dom";
import "./Nav.css"

const Nav = () => {
    return (
        <nav>
            <img src="./logo.png" alt="Food Truck" />
            <ul>
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
