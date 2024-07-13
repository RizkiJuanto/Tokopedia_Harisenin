const express = require('express');
const cartRoutes = express.Router();
const cartController = require('../controllers/cartController');

cartRoutes.get('/', cartController.getAllCart);
cartRoutes.post('/add', cartController.addProductToCart);
cartRoutes.post('/add-dummy-data', cartController.addDummyData);



module.exports = cartRoutes;