import React from 'react';
import './styles/ChangePassword.css';

const ChangePassword = () => {
    return (
        <div className="change-password">
            <h1>Change Password</h1>
            <form>
                <label>Current Password</label>
                <input type="password" placeholder="Enter current password" />

                <label>New Password</label>
                <input type="password" placeholder="Enter new password" />

                <label>Confirm New Password</label>
                <input type="password" placeholder="Confirm new password" />

                <button type="submit" className="save-btn">Update Password</button>
            </form>
        </div>
    );
};

export default ChangePassword;
