const knex = require("../database/knex");

class NotesController {
  async create(req, res) {
    const { title, description, rating } = req.body;
    const { user_id } = req.params;
    await knex("notes").insert({ title, description, rating, user_id });
    res.send("Note created");
  }

  async showAll(req, res) {
    const { user_id } = req.params;
    const notes = await knex("notes").where({ user_id });
    res.json(notes);
  }

  async show(req, res) {
    const { id } = req.params;
    const note = await knex("notes").where({id}).first();
    res.json(note);
  }

  async delete(req, res) {
    const { id } = req.params;
    await knex("notes").where({ id }).delete();
    res.send("Note deleted");
}


}

module.exports = NotesController;
