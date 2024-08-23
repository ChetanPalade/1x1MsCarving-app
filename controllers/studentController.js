const Student = require('../models/studentModel');

exports.getAllStudents = (req, res) => {
    Student.getAllStudents((err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

exports.createStudent = (req, res) => {
    const studentData = req.body;
    Student.createStudent(studentData, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id: results.insertId, ...studentData });
    });
};

exports.getStudentById = (req, res) => {
    const { id } = req.params;
    Student.getStudentById(id, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ message: 'Student not found' });
        res.json(results[0]);
    });
};

exports.updateStudent = (req, res) => {
    const { id } = req.params;
    const studentData = req.body;
    Student.updateStudent(id, studentData, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Student updated successfully' });
    });
};

exports.deleteStudent = (req, res) => {
    const { id } = req.params;
    Student.deleteStudent(id, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Student deleted successfully' });
    });
};
