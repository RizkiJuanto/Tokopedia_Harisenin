const express = require("express");
const bankAccountRoutes = express.Router();
const bankAccountController = require("../controllers/BankAccountController");

bankAccountRoutes.get("/", bankAccountController.getAllBankAccounts);
bankAccountRoutes.post("/", bankAccountController.createBankAccount);
bankAccountRoutes.delete("/:id", bankAccountController.deleteBankAccount);
bankAccountRoutes.get("/add", bankAccountController.addBankAccount);

module.exports = bankAccountRoutes;
