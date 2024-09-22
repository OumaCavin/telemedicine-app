import React from 'react';
import './styles/Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h2>Your Dashboard</h2>
            <p>Manage your appointments and consultations here.</p>
            <a href="/book-appointment" className="cta-link">Book an Appointment</a>
        </div>
    );
};

export default Dashboard;


// import React from 'react';

// const Dashboard = () => {
//     return (
//         <div className="dashboard">
//             <h2>Your Dashboard</h2>
//             <p>Manage your appointments and consultations here.</p>
//             <a href="/book-appointment">Book an Appointment</a>
//         </div>
//     );
// };

// export default Dashboard;
