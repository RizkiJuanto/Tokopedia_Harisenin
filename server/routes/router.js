const express = require("express");
const router = express.Router();
const db = require("../db");
const Alamat = require("../models/Alamat");

//Get alamat list
router.get("/", async (req, res) => {
  try {
    const address = await Alamat.findAll();
    res.status(200).json(address);
  } catch (err) {
    console.error("Failed to fetch addresses:", err);
    res.status(500).json({ error: "Failed to fetch addresses", details: err.message });
  }
});


// POST new alamat
router.post("/", async (req, res) => {
  try {
    const { title, name, phone, address } = req.body;
    const newAlamat = await Alamat.create({ title, name, phone, address });
    res.status(201).json(newAlamat);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create alamat" });
  }
});

//PUT update alamat
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, name, phone, address } = req.body;

    const alamat = await Alamat.findByPk(id);
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
});

// DELETE alamat by ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    // Find the rekening by ID
    const address = await Alamat.findByPk(id);

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
});

// Add alamat
router.get("/add", (req, res) => {
  const data = {
    title: "alamat saya",
    name: "saya",
    phone: "123",
    address: "jalan mangga",
  };

  let { title, name, phone, address } = data;

  // masukin ke table
  Alamat.create({
    title,
    name,
    phone,
    address,
  })
    .then((alamat) => res.redirect("/api/addresses"))
    .catch((err) => console.log(err));
});

module.exports = router;
