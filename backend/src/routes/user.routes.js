const { Router } = require("express");
const UserController = require("../controllers/usersController");
const ensureAuth = require("../middleware/ensureAuth");
const multer = require("multer");
const uploadConfig = require("../configs/upload");
const UserAvatarController = require("../controllers/userAvatarController");

const upload = multer(uploadConfig.Multer);

const usersRouter = Router();
const usersController = new UserController()

usersRouter.post("/", usersController.create);
usersRouter.put('/', ensureAuth, usersController.update);
usersRouter.delete('/', ensureAuth, usersController.delete);
usersRouter.patch('/', ensureAuth, upload.single('avatar'), UserAvatarController.update);

module.exports = usersRouter
