const { Router } = require("express");
const TagsController = require("../controllers/tagsController");
const ensureAuth = require("../middleware/ensureAuth");

const tagsController = new TagsController();
const tagRouter = Router();

tagRouter.get("/", ensureAuth, tagsController.index);

module.exports = tagRouter
