const db = require('../config/db');

const Booking = {
    getAllBookings: (callback) => {
        const sql = `SELECT Bookings.*, Students.name AS studentName, Mentors.name AS mentorName 
                     FROM Bookings 
                     JOIN Students ON Bookings.studentId = Students.id 
                     JOIN Mentors ON Bookings.mentorId = Mentors.id`;
        db.query(sql, callback);
    },
    createBooking: (data, callback) => {
        const sql = `INSERT INTO Bookings (studentId, mentorId, date, duration, premium, price) 
                     VALUES (?, ?, ?, ?, ?, ?)`;
        db.query(sql, [data.studentId, data.mentorId, data.date, data.duration, data.premium, data.price], callback);
    },
    getBookingById: (id, callback) => {
        const sql = `SELECT Bookings.*, Students.name AS studentName, Mentors.name AS mentorName 
                     FROM Bookings 
                     JOIN Students ON Bookings.studentId = Students.id 
                     JOIN Mentors ON Bookings.mentorId = Mentors.id
                     WHERE Bookings.id = ?`;
        db.query(sql, [id], callback);
    },
    updateBooking: (id, data, callback) => {
        const sql = `UPDATE Bookings SET studentId = ?, mentorId = ?, date = ?, duration = ?, premium = ?, price = ? 
                     WHERE id = ?`;
        db.query(sql, [data.studentId, data.mentorId, data.date, data.duration, data.premium, data.price, id], callback);
    },
    deleteBooking: (id, callback) => {
        const sql = 'DELETE FROM Bookings WHERE id = ?';
        db.query(sql, [id], callback);
    }
};

module.exports = Booking;
