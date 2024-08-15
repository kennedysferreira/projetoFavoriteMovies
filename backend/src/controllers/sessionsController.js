const knex = require("../database/knex");
const AppError = require("../utils/appError");
const {sign} = require("jsonwebtoken");
const {compare} = require("bcrypt");
const authConfig = require("../configs/auth");


class SessionsController {
  async create(req, res) {
    const { email, password } = req.body;

    const user = await knex("users").where({ email }).first();
    if (!user) {
      throw new AppError("Incorrect email or password", 401);
    }
    const comparePassword = await compare(password, user.password);

    if (!comparePassword) {
      throw new AppError("Incorrect email or password", 401);
    }

    const {secret, expiresIn} = authConfig.jwt;
    const token = sign({}, secret, {
      subject: String(user.id),
      expiresIn
    });

    return res.json({user, token});
}
}

module.exports = SessionsController