const { Router } = require("express");

const NotesController = require("../controllers/notesController");
const ensureAuth = require("../middleware/ensureAuth");
const notesController = new NotesController();

const noteRouter = Router()

noteRouter.use(ensureAuth)
noteRouter.post("/", notesController.create); 
noteRouter.get("/:id", notesController.show);
noteRouter.delete('/:id', notesController.delete);
noteRouter.get('/', notesController.index);

module.exports = noteRouter; 