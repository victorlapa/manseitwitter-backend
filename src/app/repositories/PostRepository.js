const db = require("../../database");

class PostRepository {
  async findAll(orderBy = "ASC") {
    const direction = orderBy.toUpperCase() === "DESC" ? "DESC" : "ASC";

    const rows = await db.query(`
      SELECT posts.*, posts.user_id AS pessoa
      FROM usuarios
      LEFT JOIN posts ON posts.id = usuarios.id
      ORDER BY usuarios.usuario ${direction}
    `);
    return rows;
  }
}

module.exports = new PostRepository();
