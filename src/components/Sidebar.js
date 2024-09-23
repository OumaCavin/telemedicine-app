import React, { useState } from 'react';
import './styles/Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    // State to handle dropdown visibility
    const [showAppointmentsDropdown, setShowAppointmentsDropdown] = useState(false);
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);
    const [showMedicalDropdown, setShowMedicalDropdown] = useState(false);

    // Functions to toggle dropdowns
    const toggleAppointmentsDropdown = () => setShowAppointmentsDropdown(!showAppointmentsDropdown);
    const toggleProfileDropdown = () => setShowProfileDropdown(!showProfileDropdown);
    const toggleMedicalDropdown = () => setShowMedicalDropdown(!showMedicalDropdown);

    return (
        <aside className="sidebar">
            <ul>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                
                {/* Appointments with dropdown */}
                <li onClick={toggleAppointmentsDropdown} className="dropdown-toggle">
                    Appointments
                </li>
                {showAppointmentsDropdown && (
                    <ul className="dropdown-menu">
                        <li><Link to="/book-appointment">Book Appointment</Link></li>
                        <li><Link to="/view-appointment">View Appointments</Link></li>
                    </ul>
                )}

                {/* Medical Records with dropdown */}
                <li onClick={toggleMedicalDropdown} className="dropdown-toggle">
                    Medical Records
                </li>
                {showMedicalDropdown && (
                    <ul className="dropdown-menu">
                        <li><Link to="/view-history">View History</Link></li>
                        <li><Link to="/upload-records">Upload Records</Link></li>
                    </ul>
                )}


                {/* Profile with dropdown */}
                <li onClick={toggleProfileDropdown} className="dropdown-toggle">
                    Profile
                </li>
                {showProfileDropdown && (
                    <ul className="dropdown-menu">
                        <li><Link to="/profile">View Profile</Link></li>
                        <li><Link to="/edit-profile">Edit Profile</Link></li>
                        <li><Link to="/change-password">Change Password</Link></li>
                    </ul>
                )}

                <li><Link to="/video-consultation">Video Consultation</Link></li>
                <li><Link to="#">Prescriptions</Link></li>
            </ul>
        </aside>
    );
};

export default Sidebar;


// import React from 'react';
// import './styles/Sidebar.css';
// import { Link } from 'react-router-dom';

// const Sidebar = () => {
//     return (
//         <aside className="sidebar">
//             <ul>
//                 <li><Link to="/dashboard">Dashboard</Link></li>
//                 <li><Link to="/book-appointment">Book Appointment</Link></li>
//                 <li><Link to="/profile">Your Profile</Link></li>
//                 <li><Link to="/video-consultation">Video Consultation</Link></li>
//             </ul>
//         </aside>
//     );
// };

// export default Sidebar;
