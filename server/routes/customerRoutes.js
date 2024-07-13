const express = require('express');
const customerRouter = express.Router();
const customerController = require('../controllers/customerController');

customerRouter.post('/', customerController.register);
customerRouter.post('/login', customerController.login);
customerRouter.post('/add', customerController.registertest);

module.exports = customerRouter;