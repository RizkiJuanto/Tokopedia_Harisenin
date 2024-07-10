const Sequelize = require("sequelize");
const db = require("../db");

const Rekening = db.define("account", {
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

module.exports = Rekening;
