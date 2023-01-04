const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const Orders = require('../controllers/Orders');

app.get('/orders', Orders.getOrders);

module.exports = app;
