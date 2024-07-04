const express = require("express");
const router = express.Router();
const db = require("../db");
const Alamat = require("../models/Alamat");

//Get alamat list
router.get("/", async (req, res) => {
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
    .then((alamat) => res.redirect("/alamats"))
    .catch((err) => console.log(err));
});

module.exports = router;
