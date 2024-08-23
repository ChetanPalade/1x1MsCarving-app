const db = require('../config/db');
const Cart = {
    addItem: (item, callback) => {
        const query = 'INSERT INTO cart (studentName, mentorName, duration, price) VALUES (?, ?, ?, ?)';
        db.query(query, [item.studentName, item.mentorName, item.duration, item.price], callback);
    },

    removeItem: (id, callback) => {
        const query = 'DELETE FROM cart WHERE id = ?';
        db.query(query, [id], callback);
    },

    getCart: (callback) => {
        const query = 'SELECT * FROM cart';
        db.query(query, callback);
    }
};

module.exports = Cart;
