import React from 'react'
import {
    Link
  } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <nav className="navbar bg-secondary bg-gradient">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1 fw-bold fs-4">Password Manager</span>
                    <Link to="/profile">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" class="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>
                    </Link>
                </div>
            </nav>
        </div>
    )
}
