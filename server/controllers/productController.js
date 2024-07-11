const Product = require("../models/Product");
const Store = require("../models/Store");
const { Op } = require("sequelize");

// Get product list
exports.getAllProduct = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [
        {
          model: Store,
          attributes: [
            "store_id",
            "store_name",
            "store_address",
            "store_image",
          ],
        },
      ],
    });
    res.status(200).json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

exports.searchProducts = async (req, res) => {
    try {
      const { query } = req.query;
      const products = await Product.findAll({
        where: {
          product_name: {
            [Op.iLike]: `%${query}%`,
          },
        },
        attributes: ["product_name"],
        limit: 8, 
      });
      res.status(200).json(products);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to search products" });
    }
  };