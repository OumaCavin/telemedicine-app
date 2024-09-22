import React, { useState } from 'react';
import './styles/Profile.css';

const Profile = () => {
    const [profile, setProfile] = useState({
        name: 'Kevin Otieno',
        email: 'kevingalacha@gmail.com',
        age: 33,
        phone: '+254 708101604'
    });

    const handleEdit = () => {
        // Logic for editing profile information
    };

    return (
        <div className="profile-page">
            <h2>My Profile</h2>
            <div className="profile-card">
                <p><strong>Name:</strong> {profile.name}</p>
                <p><strong>Email:</strong> {profile.email}</p>
                <p><strong>Age:</strong> {profile.age}</p>
                <p><strong>Phone:</strong> {profile.phone}</p>
                <button onClick={handleEdit} className="edit-profile-button">Edit Profile</button>
            </div>
        </div>
    );
};

export default Profile;

// import React from 'react';

// const Profile = () => {
//     return (
//         <div className="profile">
//             <h2>Your Profile</h2>
//             {/* Profile details and edit options go here */}
//         </div>
//     );
// };

// export default Profile;
