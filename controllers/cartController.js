const Cart = require('../models/cartModel');

exports.addItem = (req, res) => {
    const newItem = {
        studentName: req.body.studentName,
        mentorName: req.body.mentorName,
        duration: req.body.duration,
        price: req.body.price
    };

    Cart.addItem(newItem, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to add item to cart' });
        }
        res.status(201).json({ message: 'Item added to cart successfully', id: result.insertId });
    });
};

exports.removeItem = (req, res) => {
    const itemId = req.params.id;

    Cart.removeItem(itemId, (err) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to remove item from cart' });
        }
        res.status(200).json({ message: 'Item removed from cart successfully' });
    });
};

exports.getCart = (req, res) => {
    Cart.getCart((err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to retrieve cart' });
        }
        res.status(200).json(results);
    });
};
