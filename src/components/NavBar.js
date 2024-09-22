import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/NavBar.css';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">Telemedicine</div>
            <button className="hamburger" onClick={toggleMenu}>
                &#9776; {/* Hamburger icon */}
            </button>
            <ul className={`nav-links ${isOpen ? 'is-active' : ''}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/video-consultation">Consultation</Link></li>
                <li><Link to="/book-appointment">Appointments</Link></li>
                <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import './styles/NavBar.css';

// const NavBar = () => {
//     return (
//         <nav className="navbar">
//             <div className="logo">Telemedicine</div>
//             <ul className="nav-links">
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/dashboard">Dashboard</Link></li>
//                 <li><Link to="/profile">Profile</Link></li>
//                 <li><Link to="/video-consultation">Consultation</Link></li>
//                 <li><Link to="/book-appointment">Appointments</Link></li>
//                 <li><Link to="/contact-us">Contact Us</Link></li>
//             </ul>
//         </nav>
//     );
// };

// export default NavBar;
