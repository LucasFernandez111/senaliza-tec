const bcrypts = require("bcrypt");

const addHash = async (body) => {
  const password = await body.password;
  let passHash = await bcrypts.hash(password, 10);

  const user = {
    user: body.user,
    email: body.email,
    password: passHash,
  };

  return user;
};

module.exports = { addHash };
