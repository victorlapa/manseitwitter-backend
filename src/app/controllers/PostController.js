const PostRepository = require("../repositories/PostRepository");

class PostController {
  async index(request, response) {
    const { orderBy } = request.query;

    const posts = await PostRepository.findAll(orderBy);

    response.json(posts);
  }
}

module.exports = new PostController();
