const db = require('../config/db');

const Mentor = {
    getAllMentors: (callback) => {
        const sql = 'SELECT * FROM Mentors';
        db.query(sql, callback);
    },
    createMentor: (data, callback) => {
        const sql = 'INSERT INTO Mentors (name, areaOfInterest, availableSlots) VALUES (?, ?, ?)';
        db.query(sql, [data.name, data.areaOfInterest, JSON.stringify(data.availableSlots)], callback);
    },
    getMentorById: (id, callback) => {
        const sql = 'SELECT * FROM Mentors WHERE id = ?';
        db.query(sql, [id], callback);
    },
    updateMentor: (id, data, callback) => {
        const sql = 'UPDATE Mentors SET name = ?, areaOfInterest = ?, availableSlots = ? WHERE id = ?';
        db.query(sql, [data.name, data.areaOfInterest, JSON.stringify(data.availableSlots), id], callback);
    },
    deleteMentor: (id, callback) => {
        const sql = 'DELETE FROM Mentors WHERE id = ?';
        db.query(sql, [id], callback);
    }
};

module.exports = Mentor;
