const express = require("express");
const productRoutes = express.Router();
const productController =  require('../controllers/productController')

productRoutes.get("/", productController.getAllProduct);
productRoutes.get("/search", productController.searchProducts);

module.exports = productRoutes;
