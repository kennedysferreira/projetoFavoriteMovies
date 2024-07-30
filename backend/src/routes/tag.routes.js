const { Router } = require("express");
const TagsController = require("../controllers/tagsController");

const tagsController = new TagsController();
const tagRouter = Router();

tagRouter.post("/", tagsController.create);

module.exports = tagRouter