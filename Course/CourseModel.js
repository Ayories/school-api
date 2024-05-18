const connection = require("../config/db");

async function createCourse(
  course_title,
  course_code,
  course_units,
  course_description
) {
  try {
    const createTableSql = `
        CREATE TABLE IF NOT EXISTS courses (
          id INT AUTO_INCREMENT PRIMARY KEY,
          course_title VARCHAR(255) NOT NULL UNIQUE,
          course_code VARCHAR(255) NOT NULL,
          course_units VARCHAR(255) NOT NULL,
          course_description VARCHAR(255) NOT NULL
        )
      `;
    await connection.execute(createTableSql);
    const sql = `
    INSERT INTO courses(course_title, course_code, course_units,course_description) VALUES(?, ?, ?, ?)
  `;
    const result = await connection.execute(sql, [
      course_title,
      course_code,
      course_units,
      course_description,
    ]);
    return result;
  } catch (error) {
    throw error;
  }
}
async function updateCourse(course_data) {
  try {
    const sql = `SELECT * FROM courses WHERE course_code = '${course_data.course_code}'`;
    return new Promise((resolve, reject) => {
      dBConnection.execute(sql, (err, results) => {
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
async function getAllCourses(course_query) {
  try {
    let sql;
    if (course_query) {
      sql = `SELECT * FROM courses WHERE course_name LIKE %'${course_query}'% `;
    } else {
      sql = `SELECT * FROM courses`;
    }
    return new Promise((resolve, reject) => {
      dBConnection.execute(sql, (err, results) => {
        if (err) {
          reject(err);
        }
        resolve(results);
      });
    });
  } catch (error) {
    throw error;
  }
}
async function getCourse(course_data) {
  try {
    const sql = `SELECT * FROM courses WHERE course_title = '${course_data.course_title}' `;
    return new Promise((resolve, reject) => {
      connection.execute(sql, (err, results) => {
        if (err) {
          reject(err);
        }
        resolve(results);
      });
    });
  } catch (error) {
    throw error;
  }
}

async function deleteCourse(course_data) {
  try {
    const sql = `DELETE FROM courses WHERE course_name = '${course_data.course_name}' `;
    return new Promise((resolve, reject) => {
      connection.execute(sql, (err, results) => {
        if (err) {
          reject(err);
        }
        resolve(results);
      });
    });
  } catch (error) {
    throw error;
  }
}
module.exports = {
  createCourse,
  updateCourse,
  getAllCourses,
  getCourse,
  deleteCourse,
};
