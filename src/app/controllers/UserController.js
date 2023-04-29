const UserRepository = require("../repositories/UserRepository");

class CategoryController {
  async index(request, response) {
    const users = await UserRepository.findAll();

    response.json(users);
  }

  async show(request, response) {
    const { id } = request.params;

    const user = await UserRepository.findById(id);

    if (!user) return response.status(404).json({ error: "User not found" });

    console.log(user);

    response.json(user);
  }
}

module.exports = new CategoryController();
