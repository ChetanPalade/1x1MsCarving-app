const db = require('../config/db');

const Student = {
    getAllStudents: (callback) => {
        const sql = 'SELECT * FROM Students';
        db.query(sql, callback);
    },
    createStudent: (data, callback) => {
        const sql = 'INSERT INTO Students (name) VALUES (?)';
        db.query(sql, [data.name], callback);
    },
    getStudentById: (id, callback) => {
        const sql = 'SELECT * FROM Students WHERE id = ?';
        db.query(sql, [id], callback);
    },
    updateStudent: (id, data, callback) => {
        const sql = 'UPDATE Students SET name = ? WHERE id = ?';
        db.query(sql, [data.name, id], callback);
    },
    deleteStudent: (id, callback) => {
        const sql = 'DELETE FROM Students WHERE id = ?';
        db.query(sql, [id], callback);
    }
};

module.exports = Student;
