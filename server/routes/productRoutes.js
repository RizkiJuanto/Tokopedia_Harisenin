const express = require("express");
const productRoutes = express.Router();
const Product = require("../models/Product");
const Store = require("../models/Store");

// Get product list
productRoutes.get("/", async(req,res)=>{
    try {
        const products = await Product.findAll({
            include: [{
                model: Store,
                attributes: ['store_id', 'store_name', 'store_address', 'store_image']
            }]
        });
        res.status(200).json(products);
    } catch (err) {
        console.error( err);
        res.status(500).json({ error: "Failed to fetch products" });
    }
});

module.exports = productRoutes;