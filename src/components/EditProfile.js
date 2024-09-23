import React from 'react';
import './styles/EditProfile.css';

const EditProfile = () => {
    return (
        <div className="edit-profile">
            <h1>Edit Profile</h1>
            <form>
                <label>Username</label>
                <input type="text" placeholder="Enter new username" />
                
                <label>Email</label>
                <input type="email" placeholder="Enter new email" />
                
                <button type="submit" className="save-btn">Save Changes</button>
            </form>
        </div>
    );
};

export default EditProfile;
