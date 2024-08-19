const knex = require("../database/knex");
const bcrypt = require("bcrypt");

class UserController {
  async create(req, res) {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    
    await knex("users").insert({ name, email, password: hashedPassword });
    res.send({ message: "User created successfully" });
  }

  async update(req, res) {
    const user_id = req.user.id;
    
    const { name, email, password, oldPassword } = req.body;
 
    try {
      const user = await knex("users").where({ id: user_id }).first();

      if (!user) {
        return res.status(404).send({ message: "User not found" });
      }

      if (oldPassword) {
        const passwordMatch = await bcrypt.compare(oldPassword, user.password);
        if (!passwordMatch) {
          return res.status(400).send({ message: "Old password is incorrect" });
        }
      }

      const updateData = { name, email };

      if (password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        updateData.password = hashedPassword;
      }

      await knex("users").where({ id: user_id }).update(updateData);

      res.send({ message: "User updated successfully" });
    } catch (error) {
      console.error("Error updating user:", error);
      res.status(500).send({ message: "Internal server error" });
    }
  }

  async delete(req, res) {
    const user_id = req.user.id;
    await knex("users").where({ id: user_id }).del();
    res.send("User deleted successfully");
  }
}

module.exports = UserController;


