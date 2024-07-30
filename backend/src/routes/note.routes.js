const { Router } = require("express");

const NotesController = require("../controllers/notesController");
const notesController = new NotesController();

const noteRouter = Router()

noteRouter.post("/:user_id", notesController.create); 
noteRouter.get("/:user_id", notesController.showAll); 
noteRouter.get("/note/:id", notesController.show);
noteRouter.delete('/:id', notesController.delete);

module.exports = noteRouter; 