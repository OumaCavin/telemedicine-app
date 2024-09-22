import React from 'react';
import './styles/Home.css';

const Home = () => {
    return (
        <div className="home">
            <header className="home-header">
                <h1>Welcome to Telemedicine</h1>
                <p>Connect with healthcare providers from the comfort of your home through video calls, chat, and appointment scheduling.</p>
                <a href="/login" className="cta-button">Get Started</a>
            </header>
            <section className="features">
                <div className="feature">
                    <h3>Video Calls</h3>
                    <p>Consult with healthcare providers via live video.</p>
                </div>
                <div className="feature">
                    <h3>Chat</h3>
                    <p>Message your doctor in real-time.</p>
                </div>
                <div className="feature">
                    <h3>Book Appointments</h3>
                    <p>Schedule appointments online at your convenience.</p>
                </div>
            </section>
        </div>
    );
};

export default Home;

// import React from 'react';

// const Home = () => {
//     return (
//         <div className="home">
//             <h1>Welcome to Telemedicine</h1>
//             <p>Your health, our priority.</p>
//             <a href="/login">Get Started</a>
//         </div>
//     );
// };

// export default Home;
