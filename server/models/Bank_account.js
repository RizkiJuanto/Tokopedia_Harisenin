const Sequelize = require("sequelize");
const db = require("../db");

const Bank_account = db.define(
  "bank_account",
  {
    account_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    account_number: {
      type: Sequelize.STRING,
    },
    account_name: {
      type: Sequelize.STRING,
    },
    bank_name: {
      type: Sequelize.STRING,
    },
  },
  {
    tableName: 'bank_accounts',
    timestamps: false,
  }
);

module.exports = Bank_account;
