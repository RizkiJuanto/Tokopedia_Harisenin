const express = require("express");
const productRoutes = express.Router();
const Product = require("../models/Product");
const Store = require("../models/Store");
const Product_detail = require("../models/Product_detail");

// Get product list
productRoutes.get("/", async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [
        {
          model: Store,
          attributes: ["store_id","store_name","store_address","store_image",]
        },{
          model: Product_detail,
          attributes: ["product_detail_id","product_image","image_position","product_id"]
        },
      ],
    });
    res.status(200).json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

productRoutes.get("/:id", async (req, res) => {
  try {
    const product = await Product.findOne({
      where: { product_id: req.params.id },
      include: [
        {
          model: Store,
          attributes: ["store_id","store_name","store_address","store_image",]
        },{
          model: Product_detail,
          attributes: ["product_detail_id","product_image","image_position","product_id"]
        },
      ],
    });
    res.status(200).json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

module.exports = productRoutes;
