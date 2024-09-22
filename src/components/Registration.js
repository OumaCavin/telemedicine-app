import React, { useState } from 'react';
import './styles/Registration.css';

const Registration = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle registration logic
    };

    return (
        <div className="registration-page">
            <form className="registration-form" onSubmit={handleSubmit}>
                <h2>Register</h2>
                <input 
                    type="text" 
                    placeholder="Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <button type="submit" className="registration-button">Register</button>
            </form>
        </div>
    );
};

export default Registration;

// import React, { useState } from 'react';

// const Registration = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Handle registration logic
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <h2>Register</h2>
//             <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
//             <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//             <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//             <button type="submit">Register</button>
//         </form>
//     );
// };

// export default Registration;
