const { Router } = require("express");
const usersRouter = require("./user.routes");
const noteRouter = require("./note.routes");
const tagRouter = require("./tag.routes");

const routes = Router();

routes.use("/users", usersRouter);
routes.use('/notes', noteRouter)
routes.use('/tags', tagRouter)

module.exports = routes;