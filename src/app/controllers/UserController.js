const UserRepository = require("../repositories/UserRepository");

class CategoryController {
  async index(request, response) {
    const users = await UserRepository.findAll();

    response.json(users);
  }
}

module.exports = new CategoryController();
