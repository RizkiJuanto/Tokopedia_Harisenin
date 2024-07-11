const Address = require("../models/Address");

//Get alamat list
exports.getAllAddresses = async (req, res) => {
  try {
    const alamats = await Address.findAll();
    res.status(200).json(alamats);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch addresses" });
  }
};

// POST new alamat
exports.createAddress = async (req, res) => {
  try {
    const { title, name, phone, address } = req.body;
    const newAlamat = await Address.create({ title, name, phone, address });
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
    const { title, name, phone, address } = req.body;

    const alamat = await Address.findByPk(id);
    if (!alamat) {
      return res.status(404).json({ error: "Alamat not found" });
    }

    alamat.title = title;
    alamat.name = name;
    alamat.phone = phone;
    alamat.address = address;

    await alamat.save();

    res.status(200).json(alamat);
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
    title: "alamat saya",
    name: "saya",
    phone: "123",
    address: "jalan mangga",
  };

  let { title, name, phone, address } = data;

  // masukin ke table
  Address.create({
    title,
    name,
    phone,
    address,
  })
    .then((alamat) => res.redirect("/api/addresses"))
    .catch((err) => console.log(err));
};
