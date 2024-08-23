import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const fetchMentors = async () => {
    const response = await axios.get(`${API_URL}/mentors`);
    return response.data;
};

export const fetchStudents = async () => {
    const response = await axios.get(`${API_URL}/students`);
    return response.data;
};

export const createBooking = async (bookingData) => {
    const response = await axios.post(`${API_URL}/bookings`, bookingData);
    return response.data;
};

export const createPayment = async (paymentData) => {
    const response = await axios.post(`${API_URL}/payments`, paymentData);
    return response.data;
};
