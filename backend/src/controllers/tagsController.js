const knex = require("../database/knex");

class TagsController {
  async create(req, res) {
    const { name } = req.body;
    const {note_id} = req.query;
    const { user_id } = req.query;

    await knex("tags").insert({ name, note_id, user_id });
    return res.json({ message: "Tag created" });
  }
}

module.exports = TagsController;
