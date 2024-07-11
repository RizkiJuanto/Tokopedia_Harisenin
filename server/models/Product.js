const Sequelize = require("sequelize");
const db = require("../db");

const Product = db.define(
  "product",
  {
    product_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    product_price: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    product_stock: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    product_sold: {
      type: Sequelize.INTEGER,
    },
    product_rating: {
      type: Sequelize.FLOAT,
    },
    product_desc: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    store_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Product;
