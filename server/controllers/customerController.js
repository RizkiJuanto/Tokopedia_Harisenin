const Customer = require("../models/Customer");
// const BankAccount = require("../models/Bank_account");
// const Address = require("../models/Address");
const bcrypt = require("bcrypt");

exports.createCustomer = async (req, res) => {
  try {
    const {
      customer_id,
      customer_name,
      customer_image,
      customer_dob,
      customer_gender,
      customer_email,
      customer_phone,
      customer_password,
      customer_username,
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
      customer_username,
      customer_pin,
      address_id,
      account_id,
    });

    res.status(201).json(newCustomer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createCustomertest = async (req, res) => {
  try {

    const data = {
      customer_id: "1",
      customer_name: "John Doe",
      customer_email: "john.doe@example.com",
      customer_phone: "123456789",
      customer_password: "password123", 
      customer_username: "johndoe",
      customer_pin: "1234",
    };

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(data.customer_password, salt);

    const newCustomer = await Customer.create({
      customer_id: data.customer_id,
      customer_name: data.customer_name,
      customer_email: data.customer_email,
      customer_phone: data.customer_phone,
      customer_password: hashedPassword, 
      customer_username: data.customer_username,
      customer_pin: data.customer_pin,
    });

    res.status(201).json(newCustomer);
  } catch (error) {
    console.error("Error creating customer:", error);
    res.status(500).json({ error: "Failed to create customer" });
  }
};
