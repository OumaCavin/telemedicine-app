import React from 'react';
import './styles/Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <ul>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/book-appointment">Book Appointment</Link></li>
                <li><Link to="/profile">Your Profile</Link></li>
                <li><Link to="/video-consultation">Video Consultation</Link></li>
            </ul>
        </aside>
    );
};

export default Sidebar;
