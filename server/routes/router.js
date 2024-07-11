const express = require("express");
const router = express.Router();
const Alamat = require("../models/Alamat");

//Get alamat list
router.get("/", async (req,res) => {
  try {
    const alamats = await Alamat.findAll();
    res.status(200).json(alamats);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch addresses" });
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

//update alamat
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

// Add sebuah alamat
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
    .then((alamat) => res.redirect("/api"))
    .catch((err) => console.log(err));
});

module.exports = router;
