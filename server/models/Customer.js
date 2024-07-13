const Sequelize = require("sequelize");
const db = require("../db");
const Address = require("./Address");
const BankAccount = require("./Bank_account");
const bcrypt = require("bcrypt");

const Customer = db.define(
  "customer",
  {
    customer_id: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    customer_name: {
      type: Sequelize.STRING,
      allowNull: true,
      unique: true,
    },
    customer_image: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    customer_dob: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    customer_gender: {
      type: Sequelize.ENUM("male", "female"),
      allowNull: true,
    },
    customer_email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    customer_phone: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    customer_password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    customer_pin: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    address_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: Address,
        key: "id",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      },
    },
    account_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: BankAccount,
        key: "id",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      },
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Customer;
