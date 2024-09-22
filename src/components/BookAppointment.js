import React, { useState } from 'react';
import './styles/BookAppointment.css';

const BookAppointment = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle appointment booking logic
    };

    return (
        <div className="appointment-page">
            <form className="appointment-form" onSubmit={handleSubmit}>
                <h2>Book an Appointment</h2>
                <input 
                    type="date" 
                    value={date} 
                    onChange={(e) => setDate(e.target.value)} 
                    required 
                />
                <input 
                    type="time" 
                    value={time} 
                    onChange={(e) => setTime(e.target.value)} 
                    required 
                />
                <button type="submit" className="appointment-button">Book Now</button>
            </form>
        </div>
    );
};

export default BookAppointment;

// import React from 'react';

// const BookAppointment = () => {
//     return (
//         <div className="book-appointment">
//             <h2>Book an Appointment</h2>
//             {/* Appointment booking form goes here */}
//         </div>
//     );
// };

// export default BookAppointment;
