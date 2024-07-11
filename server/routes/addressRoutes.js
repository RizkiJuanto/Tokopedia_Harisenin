const express = require("express");
const addressRoutes = express.Router();
const addressController = require("../controllers/addressController");

addressRoutes.get("/", addressController.getAllAddresses);
addressRoutes.post("/", addressController.createAddress);
addressRoutes.put("/:id", addressController.updateAddress);
addressRoutes.delete("/:id", addressController.deleteAddress);
addressRoutes.get("/add", addressController.addAddress);

module.exports = addressRoutes;
