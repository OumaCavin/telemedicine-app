import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/NavBar.css';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false); // For hamburger menu toggle
    const [activeDropdown, setActiveDropdown] = useState(null); // For dropdowns

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = (dropdownName) => {
        setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
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

                {/* Consultations Dropdown */}
                <li className="dropdown-parent">
                    <button
                        className="dropdown-toggle"
                        onClick={() => toggleDropdown('consultations')}
                    >
                        Consultations
                    </button>
                    {activeDropdown === 'consultations' && (
                        <ul className="dropdown">
                            <li><Link to="/book-appointment">Book Appointment</Link></li>
                            <li><Link to="/view-appointment">View Appointments</Link></li>
                        </ul>
                    )}
                </li>

                {/* Medical Records Dropdown */}
                <li className="dropdown-parent">
                    <button
                        className="dropdown-toggle"
                        onClick={() => toggleDropdown('medical-records')}
                    >
                        Medical Records
                    </button>
                    {activeDropdown === 'medical-records' && (
                        <ul className="dropdown">
                            <li><Link to="/view-history">View History</Link></li>
                            <li><Link to="/upload-records">Upload Records</Link></li>
                        </ul>
                    )}
                </li>

                <li><Link to="/prescriptions">Prescriptions</Link></li>

                {/* Profile Dropdown */}
                <li className="dropdown-parent">
                    <button
                        className="dropdown-toggle"
                        onClick={() => toggleDropdown('profile')}
                    >
                        Profile
                    </button>
                    {activeDropdown === 'profile' && (
                        <ul className="dropdown">
                            <li><Link to="/edit-profile">Edit Profile</Link></li>
                            <li><Link to="/change-password">Change Password</Link></li>
                        </ul>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './styles/NavBar.css';

// const NavBar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <nav className="navbar">
//             <div className="logo">Telemedicine</div>
//             <button className="hamburger" onClick={toggleMenu}>
//                 &#9776; {/* Hamburger icon */}
//             </button>
//             <ul className={`nav-links ${isOpen ? 'is-active' : ''}`}>
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

// ---------------------------------

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
