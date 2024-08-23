const Booking = require('../models/bookingModel');

exports.getAllBookings = (req, res) => {
    Booking.getAllBookings((err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

exports.createBooking = (req, res) => {
    const bookingData = req.body;
    Booking.createBooking(bookingData, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id: results.insertId, ...bookingData });
    });
};

exports.getBookingById = (req, res) => {
    const { id } = req.params;
    Booking.getBookingById(id, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ message: 'Booking not found' });
        res.json(results[0]);
    });
};

exports.updateBooking = (req, res) => {
    const { id } = req.params;
    const bookingData = req.body;
    Booking.updateBooking(id, bookingData, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Booking updated successfully' });
    });
};

exports.deleteBooking = (req, res) => {
    const { id } = req.params;
    Booking.deleteBooking(id, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Booking deleted successfully' });
    });
};
