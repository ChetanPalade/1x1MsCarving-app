import React, { useState, useEffect } from 'react';
import MentorList from './MentorList';
import BookingForm from './BookingForm';
import axios from 'axios';

function StudentDashboard() {
    const [mentors, setMentors] = useState([]);

    useEffect(() => {
        axios.get('/api/mentors')
            .then(response => setMentors(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="dashboard-container">
            <h2>Welcome, Student!</h2>
            <MentorList mentors={mentors} />
            <BookingForm mentors={mentors} />
        </div>
    );
}

export default StudentDashboard;
