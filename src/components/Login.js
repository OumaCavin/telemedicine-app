import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './styles/Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic
    };

    return (
        <div className="login-page">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
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
                <button type="submit" className="login-button">Login</button>
                <p>
                    Don't have an account? <Link to="/registration">Register here</Link>
                </p>
                <p>
                    <Link to="/forgot-password">Forgot Password?</Link> {/* Forgot Password Link */}
                </p>
            </form>
        </div>
    );
};

export default Login;


// import React, { useState } from 'react';
// import './styles/Login.css';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Handle login logic
//     };

//     return (
//         <div className="login-page">
//             <form className="login-form" onSubmit={handleSubmit}>
//                 <h2>Login</h2>
//                 <input 
//                     type="email" 
//                     placeholder="Email" 
//                     value={email} 
//                     onChange={(e) => setEmail(e.target.value)} 
//                     required 
//                 />
//                 <input 
//                     type="password" 
//                     placeholder="Password" 
//                     value={password} 
//                     onChange={(e) => setPassword(e.target.value)} 
//                     required 
//                 />
//                 <button type="submit" className="login-button">Login</button>
//             </form>
//         </div>
//     );
// };

// export default Login;
// ------------------------------------------

// import React, { useState } from 'react';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Handle login logic
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <h2>Login</h2>
//             <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//             <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//             <button type="submit">Login</button>
//         </form>
//     );
// };

// export default Login;
