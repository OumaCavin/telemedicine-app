import React, { useState } from 'react';
import './styles/EditProfile.css';
import FileBase64 from 'react-file-base64'; // For handling file upload

const EditProfile = () => {
    const [profile, setProfile] = useState({
        name: 'Kevin Otieno', // Default value
        email: 'kevingalacha@gmail.com', // Default value
        age: '33', // Default value
        phone: '+254 708101604', // Default value
        profilePicture: '' // State for profile picture
    });

    const handleChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const handleFileUpload = (file) => {
        setProfile({ ...profile, profilePicture: file.base64 });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle saving profile changes here
        console.log(profile); // For demonstration purposes
    };

    return (
        <div className="profile-page">
            <div className="profile-container">
                <h2 className="profile-title">Edit Profile</h2>
                <div className="profile-card">
                    <div className="profile-picture-section">
                        {profile.profilePicture ? (
                            <img src={profile.profilePicture} alt="Profile" className="profile-picture" />
                        ) : (
                            <p>No profile picture</p>
                        )}
                        <FileBase64 multiple={false} onDone={handleFileUpload} />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <p>
                            <strong>Name:</strong>
                            <input
                                name="name"
                                value={profile.name}
                                onChange={handleChange}
                                placeholder="Enter new name"
                            />
                        </p>
                        <p>
                            <strong>Email:</strong>
                            <input
                                name="email"
                                value={profile.email}
                                onChange={handleChange}
                                placeholder="Enter new email"
                            />
                        </p>
                        <p>
                            <strong>Age:</strong>
                            <input
                                name="age"
                                value={profile.age}
                                onChange={handleChange}
                                placeholder="Enter new age"
                            />
                        </p>
                        <p>
                            <strong>Phone:</strong>
                            <input
                                name="phone"
                                value={profile.phone}
                                onChange={handleChange}
                                placeholder="Enter new phone number"
                            />
                        </p>
                        <button type="submit" className="edit-profile-button">Save Changes</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;






// import React from 'react';
// import './styles/EditProfile.css';

// const EditProfile = () => {
//     return (
//         <div className="edit-profile">
//             <h1>Edit Profile</h1>
//             <form>
//                 <label>Username</label>
//                 <input type="text" placeholder="Enter new username" />
                
//                 <label>Email</label>
//                 <input type="email" placeholder="Enter new email" />
                
//                 <button type="submit" className="save-btn">Save Changes</button>
//             </form>
//         </div>
//     );
// };

// export default EditProfile;
