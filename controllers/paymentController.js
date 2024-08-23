const Payment = require('../models/paymentModel');

exports.getAllPayments = (req, res) => {
    Payment.getAllPayments((err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

exports.createPayment = (req, res) => {
    const paymentData = req.body;
    Payment.createPayment(paymentData, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id: results.insertId, ...paymentData });
    });
};

exports.getPaymentById = (req, res) => {
    const { id } = req.params;
    Payment.getPaymentById(id, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ message: 'Payment not found' });
        res.json(results[0]);
    });
};

exports.updatePayment = (req, res) => {
    const { id } = req.params;
    const paymentData = req.body;
    Payment.updatePayment(id, paymentData, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Payment updated successfully' });
    });
};

exports.deletePayment = (req, res) => {
    const { id } = req.params;
    Payment.deletePayment(id, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Payment deleted successfully' });
    });
};
