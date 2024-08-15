const knex = require("../database/knex");

const DiskStorage = require("../providers/DiskStorage");

class UserAvatarController {
  async update(req, res) {
    const user_id = req.user.id;
    const avatar = req.file.filename;
    const user = await knex("users").where({ id: user_id }).first();

    const diskStorage = new DiskStorage();

    if (!user) {  
      throw new Error("User not found");
    }

    if (user.avatar) {
      await diskStorage.deleteFile(user.avatar);
    }
    const filename = await diskStorage.saveFile(avatar);
    user.avatar = filename;
    await knex('users').where({ id: user_id }).update({ avatar: filename });

    return res.json(user);
  }
}
module.exports = new UserAvatarController()