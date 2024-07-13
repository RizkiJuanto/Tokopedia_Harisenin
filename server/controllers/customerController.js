const Customer = require("../models/Customer");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  try {
    console.log("Request body:", req.body);
    const {
      customer_id,
      customer_name,
      customer_image,
      customer_dob,
      customer_gender,
      customer_email,
      customer_phone,
      customer_password,
      customer_pin,
      address_id,
      account_id,
    } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(customer_password, salt);

    const newCustomer = await Customer.create({
      customer_id,
      customer_name,
      customer_image,
      customer_dob,
      customer_gender,
      customer_email,
      customer_phone,
      customer_password: hashedPassword,
      customer_pin,
      address_id,
      account_id,
    });

    res.status(201).json(newCustomer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.registertest = async (req, res) => {
  try {
    const data = {
      customer_id: "3",
      customer_email: "john.doe@example.com",
      customer_password: "password123",
    };

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(data.customer_password, salt);

    const newCustomer = await Customer.create({
      customer_id: data.customer_id,
      customer_email: data.customer_email,
      customer_password: hashedPassword,
    });

    res.status(201).json(newCustomer);
  } catch (error) {
    console.error("Error creating customer:", error);
    res.status(500).json({ error: "Failed to create customer" });
  }
};

exports.login = async (req, res) => {
  const { customer_email, customer_password } = req.body;

  try {
    const customer = await Customer.findOne({
      where: { customer_email },
    });

    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }

    const isPasswordValid = await bcrypt.compare(
      customer_password,
      customer.customer_password
    );

    console.log("isPasswordValid:", isPasswordValid);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { customerId: customer.customer_id },
      process.env.JWT_SECRET
    );

    res.json({ token });
  } catch (error) {
    console.error("Error logging in customer:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
