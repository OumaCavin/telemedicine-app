import React, { useState } from 'react';
import './styles/ContactUs.css';

const ContactUs = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle contact form submission
    };

    return (
        <div className="contact-page">
            <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Contact Us</h2>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    value={form.name} 
                    onChange={handleChange} 
                    required 
                />
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    value={form.email} 
                    onChange={handleChange} 
                    required 
                />
                <textarea 
                    name="message" 
                    placeholder="Your Message" 
                    value={form.message} 
                    onChange={handleChange} 
                    required 
                />
                <button type="submit" className="submit-button">Send Message</button>
            </form>
        </div>
    );
};

export default ContactUs;

// import React from 'react';

// const ContactUs = () => {
//     return (
//         <div className="contact-us">
//             <h2>Contact Us</h2>
//             {/* Contact form goes here */}
//         </div>
//     );
// };

// export default ContactUs;
