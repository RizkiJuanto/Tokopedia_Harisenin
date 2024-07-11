const Sequelize = require("sequelize");
const db = require("../db");
const Store = require("../models/Store");

const Product = db.define("product",{
    product_id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    product_name:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    product_price:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    product_stock:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    product_sold:{
        type:Sequelize.INTEGER,
        defaultValue:0,
    },
    product_rating:{
        type:Sequelize.FLOAT,
        defaultValue:0,
    },
    product_desc:{
        type:Sequelize.TEXT,
        allowNull:false,
    },
    store_id:{
        type:Sequelize.INTEGER,
        references: {
            model: Store,
            key: 'store_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
},{
    timestamps:false,
});

Product.belongsTo(Store, { foreignKey: 'store_id' });
Store.hasMany(Product, { foreignKey: 'store_id' });


module.exports = Product;