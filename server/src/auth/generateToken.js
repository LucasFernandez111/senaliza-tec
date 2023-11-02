const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  const token = jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRA,
  });

  return token;
};

module.exports = { generateToken };
