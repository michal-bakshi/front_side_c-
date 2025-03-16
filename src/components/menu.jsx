import React from 'react';
import { Link } from 'react-router-dom';

export const Menu = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light m-2">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScrollnew" aria-expanded="false">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScrollnew">
                    <ul className="navbar-nav me-auto my-2 my-lg-0">
                        <li className="nav-item"> 
                            <Link to="login" className="nav-link"> התחברות </Link>
                        </li>
                        <li className="nav-item"> 
                            <Link to="register" className="nav-link"> הרשמה </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
