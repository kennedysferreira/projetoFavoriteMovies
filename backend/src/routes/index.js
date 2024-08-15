const { Router } = require("express");
const usersRouter = require("./user.routes");
const noteRouter = require("./note.routes");
const tagRouter = require("./tag.routes");
const sessionsRouter = require("./sessions.routes");

const routes = Router();

routes.use("/users", usersRouter);
routes.use('/notes', noteRouter)
routes.use('/tags', tagRouter)
routes.use('/sessions', sessionsRouter)


module.exports = routes;