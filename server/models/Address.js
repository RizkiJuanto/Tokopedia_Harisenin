const Sequelize = require("sequelize");
const db = require("../db");

const Address = db.define(
  "address",
  {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
    },
    phone: {
      type: Sequelize.STRING,
      validate: {
        is: {
          args: /^[0-9]+$/i,
          msg: "Phone number can only contain numeric characters",
        },
      },
    },
    address: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Address;
