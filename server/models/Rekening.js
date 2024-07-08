const Sequelize = require("sequelize");
const db = require("../db");

const Rekening = db.define("rekening", {
  bankName: {
    type: Sequelize.STRING,
  },
  number: {
    type: Sequelize.STRING,
  },
  ownerName: {
    type: Sequelize.STRING,
  },
});

module.exports = Rekening;
