const db = require('../config/db');

const Payment = {
    getAllPayments: (callback) => {
        const sql = `SELECT Payments.*, Bookings.id AS bookingId 
                     FROM Payments 
                     JOIN Bookings ON Payments.bookingId = Bookings.id`;
        db.query(sql, callback);
    },
    createPayment: (data, callback) => {
        const sql = `INSERT INTO Payments (bookingId, amount, paymentStatus) 
                     VALUES (?, ?, ?)`;
        db.query(sql, [data.bookingId, data.amount, data.paymentStatus], callback);
    },
    getPaymentById: (id, callback) => {
        const sql = `SELECT Payments.*, Bookings.id AS bookingId 
                     FROM Payments 
                     JOIN Bookings ON Payments.bookingId = Bookings.id
                     WHERE Payments.id = ?`;
        db.query(sql, [id], callback);
    },
    updatePayment: (id, data, callback) => {
        const sql = `UPDATE Payments SET bookingId = ?, amount = ?, paymentStatus = ? 
                     WHERE id = ?`;
        db.query(sql, [data.bookingId, data.amount, data.paymentStatus, id], callback);
    },
    deletePayment: (id, callback) => {
        const sql = 'DELETE FROM Payments WHERE id = ?';
        db.query(sql, [id], callback);
    }
};

module.exports = Payment;
