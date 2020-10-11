import React from 'react';
import {
    Link
  } from "react-router-dom";

function Header() {
    return (
        <ul className="nav justify-content-center justify-content-sm-end py-3">
            <li className="nav-item">
                <Link className="nav-link text-dark active" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-dark" to="/about">About us</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-dark" to="/search">Search Result</Link>
            </li>
        </ul>
    );
}

export default Header;