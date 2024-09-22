import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Registration from './components/Registration';
import ForgotPassword from './components/ForgotPassword'; 
import Footer from './components/Footer';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import VideoConsultation from './components/VideoConsultation';
import BookAppointment from './components/BookAppointment';
import ContactUs from './components/ContactUs';

import './App.css';

function App() {
    return (
        <Router>
            <div className="app">
                <NavBar />
                <div className="main-layout">
                    <Sidebar />
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/registration" element={<Registration />} />
                            <Route path="/forgot-password" element={<ForgotPassword />} /> {/* Corrected here */}
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/video-consultation" element={<VideoConsultation />} />
                            <Route path="/book-appointment" element={<BookAppointment />} />
                            <Route path="/contact-us" element={<ContactUs />} />
                        </Routes>
                    </div>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import NavBar from './components/NavBar';
// import Sidebar from './components/Sidebar';
// import Footer from './components/Footer';
// import Home from './components/Home';
// import Dashboard from './components/Dashboard';
// import Profile from './components/Profile';
// import VideoConsultation from './components/VideoConsultation';
// import BookAppointment from './components/BookAppointment';
// import ContactUs from './components/ContactUs';

// import './App.css';

// function App() {
//     return (
//         <Router>
//             <div className="app">
//                 <NavBar />
//                 <div className="main-layout">
//                     <Sidebar />
//                     <div className="content">
//                         <Switch>
//                             <Route path="/" exact component={Home} />
//                             <Route path="/dashboard" component={Dashboard} />
//                             <Route path="/profile" component={Profile} />
//                             <Route path="/video-consultation" component={VideoConsultation} />
//                             <Route path="/book-appointment" component={BookAppointment} />
//                             <Route path="/contact-us" component={ContactUs} />
//                         </Switch>
//                     </div>
//                 </div>
//                 <Footer />
//             </div>
//         </Router>
//     );
// }

// export default App;
// -----------------------------------------------

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './components/Home';
// import Login from './components/Login';
// import Registration from './components/Registration';
// import Dashboard from './components/Dashboard';
// import BookAppointment from './components/BookAppointment';
// import VideoConsultation from './components/VideoConsultation';
// import Profile from './components/Profile';
// import ContactUs from './components/ContactUs';

// function App() {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/register" element={<Registration />} />
//                 <Route path="/dashboard" element={<Dashboard />} />
//                 <Route path="/book-appointment" element={<BookAppointment />} />
//                 <Route path="/video-consultation" element={<VideoConsultation />} />
//                 <Route path="/profile" element={<Profile />} />
//                 <Route path="/contact-us" element={<ContactUs />} />
//             </Routes>
//         </Router>
//     );
// }

// export default App;
// ---------------------------------------

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
