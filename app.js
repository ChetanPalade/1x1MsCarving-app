const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRoutes = require('./routes/apiRoutes');
const cartRoutes = require('./routes/cartRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', apiRoutes);
app.use('/api/cart', cartRoutes);

module.exports = app;
