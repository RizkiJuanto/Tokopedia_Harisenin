const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const generateToken = (user) => {
  const payload = {
    id: user.id,
    email: user.email,
  };
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
};

const verifyPassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

module.exports = {
  generateToken,
  verifyPassword,
};
