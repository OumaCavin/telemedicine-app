import React, { useState } from 'react';
import FileBase64 from 'react-file-base64';
import './styles/ProfilePictureUpload.css'; // Optional for styling

const ProfilePictureUpload = () => {
    const [profilePicture, setProfilePicture] = useState(null); // State to store the uploaded image
    const [isEditing, setIsEditing] = useState(false); // State to toggle editing

    // Function to handle image upload
    const handleFileUpload = ({ base64 }) => {
        setProfilePicture(base64); // Set the uploaded image
        setIsEditing(false); // Disable editing after image is uploaded
    };

    return (
        <div className="profile-picture-container">
            {profilePicture ? (
                <img
                    src={profilePicture}
                    alt="Profile"
                    className="profile-picture"
                    onClick={() => setIsEditing(true)} // Click to edit
                />
            ) : (
                <div className="placeholder" onClick={() => setIsEditing(true)}>
                    {/* Placeholder if no image is uploaded */}
                    Upload Profile Picture
                </div>
            )}

            {isEditing && (
                <div className="edit-section">
                    <FileBase64
                        multiple={false}
                        onDone={handleFileUpload} // Handle image file upload
                    />
                </div>
            )}
        </div>
    );
};

export default ProfilePictureUpload;
