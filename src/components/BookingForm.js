import React, { useState, useEffect } from 'react';
import { fetchMentors } from '../services/apiService';
import Cart from '../pages/Cart';
import '../styles/BookingForm.css';

function BookingForm() {
    const [mentors, setMentors] = useState([]);
    const [studentName, setStudentName] = useState('');
    const [mentorId, setMentorId] = useState('');
    const [date, setDate] = useState('');
    const [duration, setDuration] = useState(30);
    const [premium, setPremium] = useState(false);
    const [price, setPrice] = useState(2000);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetchMentors().then(data => setMentors(data));
    }, []);

    const addToCart = () => {
        const mentor = mentors.find(m => m.id === mentorId);
        const cartItem = {
            name: mentor.name,
            duration,
            price
        };
        setCartItems([...cartItems, cartItem]);
    };

    const removeFromCart = (index) => {
        const newCartItems = cartItems.filter((_, i) => i !== index);
        setCartItems(newCartItems);
    };

    return (
        <div className="booking-form-container">
            <h2>Schedule a Session</h2>
            <input
                type="text"
                value={studentName}
                placeholder="Student Name"
                onChange={(e) => setStudentName(e.target.value)}
            />
            <select value={mentorId} onChange={(e) => setMentorId(e.target.value)}>
                <option value="">Select a Mentor</option>
                {mentors.map(mentor => (
                    <option key={mentor.id} value={mentor.id}>
                        {mentor.name} - {mentor.areaOfInterest}
                    </option>
                ))}
            </select>
            <input
                type="datetime-local"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <select value={duration} onChange={(e) => setDuration(e.target.value)}>
                <option value={30}>30 mins</option>
                <option value={45}>45 mins</option>
                <option value={60}>60 mins</option>
            </select>
            <label>
                Premium Service
                <input
                    type="checkbox"
                    checked={premium}
                    onChange={(e) => {
                        setPremium(e.target.checked);
                        setPrice(e.target.checked ? 3000 : 2000);
                    }}
                />
            </label>
            <p>Total Price: {price} INR</p>
            <button onClick={addToCart}>Add to Cart</button>
            <Cart cartItems={cartItems} onRemove={removeFromCart} />
        </div>
    );
}

export default BookingForm;
