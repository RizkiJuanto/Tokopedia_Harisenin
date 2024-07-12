const sequelize = require('sequelize');
const db = require('../db');

const Cart = db.define("cart",{
    cart_id:{
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    cart_quantity:{
        type: sequelize.INTEGER,
        allowNull: false,
    }
});