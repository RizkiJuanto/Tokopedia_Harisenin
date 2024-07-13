const Sequelize = require("sequelize");
const db = require("../db");

const Store = db.define("store",{
    store_id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    store_name:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    store_address:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    store_image:{
        type:Sequelize.TEXT,
        allowNull:false,
    }
},{
    timestamps: false
});

module.exports = Store;