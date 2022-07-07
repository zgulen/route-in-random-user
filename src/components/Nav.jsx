import React from "react";
import { Navigate, Link } from "react-router-dom";
import "./Nav.css"

const Nav = () => {
    return (
        <nav>
            <img src="./logo.png" alt="Food Truck" />
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
