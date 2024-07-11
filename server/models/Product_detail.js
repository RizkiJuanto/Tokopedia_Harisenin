const Sequelize = require("sequelize");
const db = require("../db");
const Product = require("../models/Product");

const Product_detail = db.define("product_detail",{
    product_detail_id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    product_image:{
        type:Sequelize.TEXT,
        allowNull:false,
    },
    image_position:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    product_id:{
        type:Sequelize.INTEGER,
        references: {
            model: Product,
            key: 'product_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    }
},{
    timestamps:false,
});

Product_detail.belongsTo(Product, { foreignKey: 'product_id' });
Product.hasMany(Product_detail, { foreignKey: 'product_id' });

module.exports = Product_detail;