const express = require("express");
const rekeningRoute = express.Router();
const db = require("../db");
const Rekening = require("../models/Rekening");

rekeningRoute.get("/", async (req, res) => {
  try {
    const rekening = await Rekening.findAll();
    res.status(200).json(rekening);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch rekening" });
  }
});

rekeningRoute.post("/", async (req, res) => {
  try {
    const { bankName, number, ownerName } = req.body;
    const newRekening = await Rekening.create({ bankName, number, ownerName });
    res.status(201).json(newRekening);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create rekening" });
  }
});

rekeningRoute.get("/addRekening", (req, res) => {
    const data = {
      bankName: "rekening saya",
      number: "21312412",
      ownerName: "SAYA DONK",
    };

    let { bankName, number, ownerName } = data;

    Rekening.create({
        bankName,
        number,
        ownerName,
      })
        .then((rekening) => res.redirect("/api/rekenings"))
        .catch((err) => console.log(err));
});

module.exports = rekeningRoute;
