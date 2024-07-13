const express = require('express');
const customerRouter = express.Router();
const customerController = require('../controllers/customerController');

customerRouter.post('/', customerController.createCustomer);
customerRouter.post('/add', customerController.createCustomertest);

module.exports = customerRouter;