const jwt = require("jsonwebtoken");
const logger = require("../debug/logger");
const { error } = require("winston");

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) throw "Unauthorized: Missing token";

    next();
  } catch (error) {
    logger.error("Unauthorized: Missing token");
    res.status(400).send({ status: "Failed", data: error });
  }
};

module.exports = isAuthenticated;
