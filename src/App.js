import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import Dashboard from './components/Dashboard';
import BookAppointment from './components/BookAppointment';
import VideoConsultation from './components/VideoConsultation';
import Profile from './components/Profile';
import ContactUs from './components/ContactUs';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Registration />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/book-appointment" element={<BookAppointment />} />
                <Route path="/video-consultation" element={<VideoConsultation />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/contact-us" element={<ContactUs />} />
            </Routes>
        </Router>
    );
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
