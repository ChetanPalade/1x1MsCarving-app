import React from 'react';

function MentorList({ mentors }) {
    return (
        <div className="mentor-list">
            <h3>Available Mentors</h3>
            <ul>
                {mentors.map(mentor => (
                    <li key={mentor.id}>
                        {mentor.name} - {mentor.areaOfInterest}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MentorList;
