import React, { useState } from 'react';
import './styles/Profile.css';
import FileBase64 from 'react-file-base64'; // For handling file upload

const Profile = () => {
    const [profile, setProfile] = useState({
        name: 'Kevin Otieno',
        email: 'kevingalacha@gmail.com',
        age: 33,
        phone: '+254 708101604',
        profilePicture: '' // New state for profile picture
    });

    const [isEditing, setIsEditing] = useState(false); // For toggling edit mode

    const handleEdit = () => {
        setIsEditing(!isEditing); // Toggle between edit and view mode
    };

    const handleChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const handleFileUpload = (file) => {
        setProfile({ ...profile, profilePicture: file.base64 });
    };

    return (
        <div className="profile-page">
            <div className="profile-container">
                <h2 className="profile-title">My Profile</h2>
                <div className="profile-card">
                    <div className="profile-picture-section">
                        {profile.profilePicture ? (
                            <img src={profile.profilePicture} alt="Profile" className="profile-picture" />
                        ) : (
                            <p>No profile picture</p>
                        )}
                        <FileBase64 multiple={false} onDone={handleFileUpload} />
                    </div>

                    {isEditing ? (
                        <>
                            <p><strong>Name:</strong> <input name="name" value={profile.name} onChange={handleChange} /></p>
                            <p><strong>Email:</strong> <input name="email" value={profile.email} onChange={handleChange} /></p>
                            <p><strong>Age:</strong> <input name="age" value={profile.age} onChange={handleChange} /></p>
                            <p><strong>Phone:</strong> <input name="phone" value={profile.phone} onChange={handleChange} /></p>
                            <button onClick={handleEdit} className="edit-profile-button">Save Profile</button>
                        </>
                    ) : (
                        <>
                            <p><strong>Name:</strong> {profile.name}</p>
                            <p><strong>Email:</strong> {profile.email}</p>
                            <p><strong>Age:</strong> {profile.age}</p>
                            <p><strong>Phone:</strong> {profile.phone}</p>
                            <button onClick={handleEdit} className="edit-profile-button">Edit Profile</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;

// import React, { useState } from 'react';
// import './styles/Profile.css';
// import FileBase64 from 'react-file-base64'; // For handling file upload

// const Profile = () => {
//     const [profile, setProfile] = useState({
//         name: 'Kevin Otieno',
//         email: 'kevingalacha@gmail.com',
//         age: 33,
//         phone: '+254 708101604',
//         profilePicture: '' // New state for profile picture
//     });

//     const handleEdit = () => {
//         // Logic for editing profile information
//     };

//     const handleFileUpload = (file) => {
//         setProfile({ ...profile, profilePicture: file.base64 });
//     };

//     return (
//         <div className="profile-page">
//             <div className="profile-container">
//                 <h2 className="profile-title">My Profile</h2>
//                 <div className="profile-card">
//                     <div className="profile-picture-section">
//                         {profile.profilePicture ? (
//                             <img src={profile.profilePicture} alt="Profile" className="profile-picture" />
//                         ) : (
//                             <p>No profile picture</p>
//                         )}
//                         <FileBase64 
//                             multiple={false} 
//                             onDone={handleFileUpload} 
//                         />
//                     </div>
//                     <p><strong>Name:</strong> {profile.name}</p>
//                     <p><strong>Email:</strong> {profile.email}</p>
//                     <p><strong>Age:</strong> {profile.age}</p>
//                     <p><strong>Phone:</strong> {profile.phone}</p>
//                     <button onClick={handleEdit} className="edit-profile-button">Edit Profile</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Profile;

// -----------------------------------------------
// import React, { useState } from 'react';
// import './styles/Profile.css';
// import FileBase64 from 'react-file-base64'; // For handling file upload

// const Profile = () => {
//     const [profile, setProfile] = useState({
//         name: 'Kevin Otieno',
//         email: 'kevingalacha@gmail.com',
//         age: 33,
//         phone: '+254 708101604',
//         profilePicture: '' // New state for profile picture
//     });

//     const handleEdit = () => {
//         // Logic for editing profile information
//     };

//     const handleFileUpload = (file) => {
//         setProfile({ ...profile, profilePicture: file.base64 });
//     };

//     return (
//         <div className="profile-page">
//             <h2>My Profile</h2>
//             <div className="profile-card">
//                 <div className="profile-picture-section">
//                     {profile.profilePicture ? (
//                         <img src={profile.profilePicture} alt="Profile" className="profile-picture" />
//                     ) : (
//                         <p>No profile picture</p>
//                     )}
//                     <FileBase64 
//                         multiple={false} 
//                         onDone={handleFileUpload} 
//                     />
//                 </div>
//                 <p><strong>Name:</strong> {profile.name}</p>
//                 <p><strong>Email:</strong> {profile.email}</p>
//                 <p><strong>Age:</strong> {profile.age}</p>
//                 <p><strong>Phone:</strong> {profile.phone}</p>
//                 <button onClick={handleEdit} className="edit-profile-button">Edit Profile</button>
//             </div>
//         </div>
//     );
// };

// export default Profile;
// -------------------------------------------

// import React, { useState } from 'react';
// import './styles/Profile.css';

// const Profile = () => {
//     const [profile, setProfile] = useState({
//         name: 'Kevin Otieno',
//         email: 'kevingalacha@gmail.com',
//         age: 33,
//         phone: '+254 708101604'
//     });

//     const handleEdit = () => {
//         // Logic for editing profile information
//     };

//     return (
//         <div className="profile-page">
//             <h2>My Profile</h2>
//             <div className="profile-card">
//                 <p><strong>Name:</strong> {profile.name}</p>
//                 <p><strong>Email:</strong> {profile.email}</p>
//                 <p><strong>Age:</strong> {profile.age}</p>
//                 <p><strong>Phone:</strong> {profile.phone}</p>
//                 <button onClick={handleEdit} className="edit-profile-button">Edit Profile</button>
//             </div>
//         </div>
//     );
// };

// export default Profile;

// -----------------------------

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
