const Sequelize = require("sequelize");
const db = require("../db");
const Customer = require("./Customer");

const Address = db.define(
  "address",
  {
    address_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    address_label: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Label cannot be empty",
        },
      },
    },
    address_name: {
      type: Sequelize.STRING,
      validate: {
        len: {
          args: [0, 255],
          msg: "Name can be at most 255 characters long",
        },
      },
    },
    address_phone: {
      type: Sequelize.STRING,
      validate: {
        is: {
          args: /^[0-9]+$/i,
          msg: "Phone number can only contain numeric characters",
        },
      },
    },
    address_full: {
      type: Sequelize.STRING,
      validate: {
        len: {
          args: [0, 500],
          msg: "Address can be at most 500 characters long",
        },
      },
    },
  },
  {
    timestamps: false,
  }
);

// Address.belongsTo(Customer, { foreignKey: "customer_id" });

module.exports = Address;
