const express = require("express");
const productRoutes = express.Router();
const productController =  require('../controllers/productController')

productRoutes.get("/", productController.getAllProduct);

module.exports = productRoutes;
