import React, { useState } from 'react';
import './styles/ForgotPassword.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle password reset logic (e.g., send email)
        setMessage('A reset link has been sent to your email.');
    };

    return (
        <div className="forgot-password-page">
            <form className="forgot-password-form" onSubmit={handleSubmit}>
                <h2>Reset Password</h2>
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <button type="submit" className="reset-button">Send Reset Link</button>
            </form>
        </div>
    );
};

export default ForgotPassword;
