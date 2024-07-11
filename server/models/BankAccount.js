const Sequelize = require("sequelize");
const db = require("../db");

const BankAccount = db.define("bankaccount", {
  bankName: {
    type: Sequelize.STRING,
  },
  number: {
    type: Sequelize.STRING,
  },
  ownerName: {
    type: Sequelize.STRING,
  },
}, {
  timestamps: false,
});

module.exports = BankAccount;
