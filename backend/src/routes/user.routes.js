const { Router } = require("express");
const UserController = require("../controllers/usersController");

const usersRouter = Router();
const usersController = new UserController()

usersRouter.post("/", usersController.create);
usersRouter.put('/:id', usersController.update);
usersRouter.delete('/:id', usersController.delete);

module.exports = usersRouter