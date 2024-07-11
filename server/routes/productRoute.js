const express = require("express");
const productRoute = express.Router();
const Product = require("../models/Product");

productRoute.get("/", async (req, res) => {
  try {
    const product = await Product.findAll();
    res.status(200).json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch product" });
  }
});

module.exports = productRoute;
