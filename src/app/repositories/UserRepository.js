const db = require("../../database");

class UserRepository {
  async findAll() {
    const rows = await db.query(`
      SELECT * FROM usuarios
    `);

    return rows;
  }

  async findById(id) {
    const [row] = await db.query(
      `
      SELECT usuarios.* from usuarios WHERE usuarios.id = $1
    `,
      [id]
    );

    return row;
  }
}

module.exports = new UserRepository();
