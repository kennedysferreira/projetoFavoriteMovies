const knex = require("../database/knex");
const AppError = require("../utils/appError");
const { sign } = require("jsonwebtoken");
const { compare } = require("bcrypt");
const authConfig = require("../configs/auth");

class SessionsController {
  async create(req, res) {
    try {
      const { email, password } = req.body;

      const user = await knex("users").where({ email }).first();
      if (!user) {
        throw new AppError("Incorrect email or password");
      }
      const comparePassword = await compare(password, user.password);

      if (!comparePassword) {
        throw new AppError("Incorrect email or password");
      }

      const { secret, expiresIn } = authConfig.jwt;
      const token = sign({}, secret, {
        subject: String(user.id),
        expiresIn,
      });

      return res.json({ user, token });
    } catch (error) {
      if (error instanceof AppError) {
        return res.status(400).json({ error: error.message });
      }

      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

module.exports = SessionsController;
