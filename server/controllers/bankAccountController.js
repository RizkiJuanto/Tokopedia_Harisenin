const BankAccount = require("../models/BankAccount");

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
    const { bankName, number, ownerName } = req.body;
    const newRekening = await BankAccount.create({ bankName, number, ownerName });
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
    bankName: "rekening saya",
    number: "21312412",
    ownerName: "SAYA DONK",
  };

  let { bankName, number, ownerName } = data;

  BankAccount.create({
    bankName,
    number,
    ownerName,
  })
    .then((rekening) => res.redirect("/api/accounts"))
    .catch((err) => console.log(err));
};