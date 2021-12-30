const mysql = require("mysql2/promise");
require("dotenv").config();

const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  connectionLimit: 100,
};
console.log(config);
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
