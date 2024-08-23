const Mentor = require('../models/mentorModel');

exports.getAllMentors = (req, res) => {
    Mentor.getAllMentors((err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

exports.createMentor = (req, res) => {
    const mentorData = req.body;
    Mentor.createMentor(mentorData, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id: results.insertId, ...mentorData });
    });
};

exports.getMentorById = (req, res) => {
    const { id } = req.params;
    Mentor.getMentorById(id, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ message: 'Mentor not found' });
        res.json(results[0]);
    });
};

exports.updateMentor = (req, res) => {
    const { id } = req.params;
    const mentorData = req.body;
    Mentor.updateMentor(id, mentorData, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Mentor updated successfully' });
    });
};

exports.deleteMentor = (req, res) => {
    const { id } = req.params;
    Mentor.deleteMentor(id, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Mentor deleted successfully' });
    });
};
