const mysql = require("mysql2/promise");

const config = {
  host: "localhost",
  user: "root",
  password: "secret",
  database: "hum_ecommerce",
  connectionLimit: 100,
};

const pool = mysql.createPool(config);

const db = {};

// used in [ register.js ]
db.push = async (table, data) => {
  await pool.query(`INSERT INTO ${table} SET ?`, data);
};

// used in [ login.js ]
db.find = async (table, key, value) => {
  const result = await pool.query(
    `SELECT * FROM ${table} WHERE ${key} = ?`,
    value
  );
  return result[0];
};

module.exports = db;
