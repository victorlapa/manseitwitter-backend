const { Client } = require("pg");

// mudar para suas configuracoes de usuario POSTGRES
const client = new Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "root",
  database: "manseitwitter",
});

client.connect();

exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
};
