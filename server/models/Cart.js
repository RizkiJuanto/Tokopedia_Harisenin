const sequelize = require('sequelize');
const db = require('../db');
const Store = require('./Store');
const Product = require('./Product');

const Cart = db.define("cart",{
    cart_id:{
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    cart_quantity:{
        type: sequelize.INTEGER,
        allowNull: false,
    },
    cart_total:{
        type: sequelize.DECIMAL(10,2),
        allowNull: false,
    },
    product_id:{
        type: sequelize.INTEGER,
        references: {
            model: 'product',
            key: 'product_id'
        },
        allowNull: false,
    },
    store_id:{
        type: sequelize.INTEGER,
        references: {
            model:'store',
            key:'store_id'
        },
        allowNull: false,
    },
    createdAt:{
        type: sequelize.DATE,
        defaultValue: sequelize.NOW
    },
    updatedAt:{
        type: sequelize.DATE,
        defaultValue: sequelize.NOW
    },
});

Cart.belongsTo(Product, {foreignKey: 'product_id'});
Product.hasMany(Cart, {foreignKey: 'product_id'});

Cart.belongsTo(Store, {foreignKey:'store_id'});
Store.hasMany(Cart, {foreignKey:'store_id'});

module.exports = Cart;