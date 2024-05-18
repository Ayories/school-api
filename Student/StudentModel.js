const connection = require("../config/db");

async function getStudentByEmail(Email) {
  try {
    const sql = `SELECT * FROM students WHERE email = '${Email}'`;
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

async function register(email, password, dob) {
  try {
    // SQL to create the table if it doesn't exist
    const createTableSql = `
      CREATE TABLE IF NOT EXISTS students (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        dob DATE NOT NULL
      )
    `;
    
    // Execute the create table query
    await connection.execute(createTableSql);
    
    // SQL to insert the record
    const insertSql = `
      INSERT INTO students(email, password, dob) VALUES(?, ?, ?)
    `;
    
    // Execute the insert query with parameterized values
    await connection.execute(insertSql, [email, password, dob]);
    
    // Return the relevant data
    return { email, dob };
  } catch (error) {
    throw error;
  }
}
  

function register_course(email, password, dob) {
  try {
    const sql = `INSERT INTO registered_courses(email,password,dob) VALUES(${email},${password},${dob})`;
    const result = connection.execute(sql);
    console.log(result);
    return result;
  } catch (error) {
    throw error;
  }
}
async function updateStudent(studentData) {
  try {
    const { formerEmail, email, dob, password } = studentData;
    const sql = `UPDATE students SET email = COALESCE('${email}',email) , Date_of_birth = COALESCE('${dob}',Date_of_birth), Passwordb = COALESCE('${password}',Password) WHERE Email = '${formerEmail}'`;
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
async function getStudents(student_query) {
  try {
    let sql;
    if (course_query) {
      sql = `SELECT * FROM courses WHERE course_name LIKE %'${course_query}'% `;
    } else {
      sql = `SELECT * FROM courses`;
    }
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
async function getStudent(Student_data) {
  try {
    const sql = `SELECT * FROM courses WHERE course_name = '${course_data.course_name}' `;
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

async function deleteStudent(student_data) {
  try {
    const sql = `DELETE FROM students WHERE EMAIL = '${student_data.course_Email}' `;
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

async function dropCourse(student_data) {
  try {
    const sql = `DELETE FROM registered_courses WHERE EMAIL = '${student_data.course_Email}' `;
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
  getStudentByEmail,
  register,
  register_course,
  getStudent,
  getStudents,
  updateStudent,
  deleteStudent,
  dropCourse,
};
