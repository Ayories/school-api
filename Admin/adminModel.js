const connection = require("../config/db");

async function getAdminByEmail(Email) {
  try {
    const sql = `SELECT * FROM admin WHERE email = '${Email}'`;
    return new Promise((resolve, reject) => {
      connection.execute(sql, (err, results) => {
        if (err) {
          reject(err);
        }
        resolve(results[0]);
      });
    });
  } catch (error) {
    throw error;
  }
}

async function createAdmin(email, password, role) {
  try {
    const createAdmin = `
        CREATE TABLE IF NOT EXISTS admin (
            id INT AUTO_INCREMENT PRIMARY KEY,
            email VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL,
            role ENUM("admin", "teacher", "student") DEFAULT "admin"
        )`;
    connection.execute(createAdmin);
    const sql = `INSERT INTO admin(email, password, role) VALUES(?,?,?)`;
    await connection.execute(sql, [email, password, role]);
    return { email, role };
  } catch (error) {
    throw error;
  }
}

module.exports = { getAdminByEmail, createAdmin };
