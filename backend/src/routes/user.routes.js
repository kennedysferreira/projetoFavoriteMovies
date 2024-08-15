const { Router } = require("express");
const UserController = require("../controllers/usersController");
const ensureAuth = require("../middleware/ensureAuth");

const usersRouter = Router();
const usersController = new UserController()

usersRouter.post("/", usersController.create);
usersRouter.put('/', ensureAuth, usersController.update);
usersRouter.delete('/', ensureAuth, usersController.delete);

module.exports = usersRouter