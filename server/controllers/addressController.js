const Address = require("../models/Address");

//Get alamat list
exports.getAllAddresses = async (req, res) => {
  try {
    const addresses = await Address.findAll();
    res.status(200).json(addresses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch addresses" });
  }
};

// POST new alamat
exports.createAddress = async (req, res) => {
  try {
    const { address_label, address_name, address_phone, address_full } =
      req.body;
    const newAlamat = await Address.create({
      address_label,
      address_name,
      address_phone,
      address_full,
    });
    res.status(201).json(newAlamat);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create alamat" });
  }
};

//PUT update alamat
exports.updateAddress = async (req, res) => {
  try {
    const { id } = req.params;
    const { address_label, address_name, address_phone, address_full } =
      req.body;

    const address = await Address.findByPk(id);
    if (!address) {
      return res.status(404).json({ error: "Alamat not found" });
    }
    address.address_label = address_label;
    address.address_name = address_name;
    address.address_phone = address_phone;
    address.address_full = address_full;

    await address.save();

    res.status(200).json(address);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update alamat" });
  }
};

// DELETE alamat by ID
exports.deleteAddress = async (req, res) => {
  const { id } = req.params;

  try {
    // Find the rekening by ID
    const address = await Address.findByPk(id);

    if (!address) {
      return res.status(404).json({ error: "address not found" });
    }

    // Delete the rekening
    await address.destroy();

    res.status(200).json({ message: "address deleted successfully" });
  } catch (error) {
    console.error("Error deleting address with ID ${id}:", error);
    res.status(500).json({ error: "Failed to delete address" });
  }
};

// Add alamat
exports.addAddress = (req, res) => {
  const data = {
    address_label: "alamat saya",
    address_name: "saya",
    address_phone: "123",
    address_full: "jalan mangga",
  };

  let { address_label, address_name, address_phone, address_full } = data;

  // masukin ke table
  Address.create({
    address_label,
    address_name,
    address_phone,
    address_full,
  })
    .then((alamat) => res.redirect("/api/addresses"))
    .catch((err) => console.log(err));
};
