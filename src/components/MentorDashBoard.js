import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MentorDashboard() {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        axios.get('/api/bookings?mentorId=1') // Assuming mentor ID is 1 for demo
            .then(response => setBookings(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="dashboard-container">
            <h2>Your Schedule</h2>
            <ul className="booking-list">
                {bookings.map(booking => (
                    <li key={booking.id}>
                        {booking.date} - {booking.duration} mins
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MentorDashboard;
