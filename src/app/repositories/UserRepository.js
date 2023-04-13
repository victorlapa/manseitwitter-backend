const db = require("../../database");

class UserRepository {
  async findAll() {
    const rows = await db.query(`
      SELECT * FROM usuarios
    `);

    return rows;
  }
}

module.exports = new UserRepository();
