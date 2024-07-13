const BankAccount = require("../models/Bank_account");

exports.getAllBankAccounts = async (req, res) => {
  try {
    const rekening = await BankAccount.findAll();
    res.status(200).json(rekening);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch rekening" });
  }
};

exports.createBankAccount = async (req, res) => {
  try {
    const { account_number, account_name, bank_name } = req.body;
    const newRekening = await BankAccount.create({
      account_number,
      account_name,
      bank_name,
    });
    res.status(201).json(newRekening);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create rekening" });
  }
};

// DELETE rekening by ID
exports.deleteBankAccount = async (req, res) => {
  const { id } = req.params;

  try {
    // Find the rekening by ID
    const rekening = await BankAccount.findByPk(id);

    if (!rekening) {
      return res.status(404).json({ error: "Rekening not found" });
    }

    // Delete the rekening
    await rekening.destroy();

    res.status(200).json({ message: "Rekening deleted successfully" });
  } catch (error) {
    console.error("Error deleting rekening with ID ${id}:", error);
    res.status(500).json({ error: "Failed to delete rekening" });
  }
};

//tes add aja
exports.addBankAccount = (req, res) => {
  const data = {
    account_number: "rekening saya",
    account_name: "21312412",
    bank_name: "SAYA DONK",
  };

  let { account_number, account_name, bank_name } = data;

  BankAccount.create({
    account_number,
    account_name,
    bank_name,
  })
    .then((rekening) => res.redirect("/api/accounts"))
    .catch((err) => console.log(err));
};
