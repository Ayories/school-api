const Connection = require("../config/db");

async function getStudentByEmail(Email){
    try{
        const sql = `SELECT * FROM students WHERE Email = '${Email}'`;
        return new Promise((resolve,reject)=>{
            Connection.execute(sql,(err,results)=>{
            if(err){
                reject(err);
            }
            resolve(results[0]);
        });
    });
    }
    catch(error){
        throw error;
    }
}

async function register(email, password, dob){
    try{
        const sql = `INSERT into students(Email,Password,Date_of_Birth) VALUES(?,?,?)`;
        const result = await Connection.execute(sql,[email,password,dob]);
        console.log(result);
        return result;
    }
    catch (error) {
        throw error
    }
}

function register_course(email,password,dob){
    try{
        const sql = `INSERT INTO registered_courses(Email,Password,Date_of_Birth) VALUES(${email},${password},${dob})`;
        const result = Connection.execute(sql);
        console.log(result);
        return result;
    }
    catch (error) {
        throw error
    }
}
async function updateStudent(studentData){
    try{
        const { formerEmail, email,dob,password }= studentData;
        const sql = `UPDATE students SET Email = COALESCE('${email}',Email) , Date_of_birth = COALESCE('${dob}',Date_of_birth), Password = COALESCE('${password}',Password) WHERE Email = '${formerEmail}'`
        return new  Promise((resolve,reject)=>{
            Connection.execute(sql,(err,results)=>{
            if(err){
                reject(err);
            }
            resolve(results[0]);
        });
    });
    } catch(error){
        throw error;
    }
}
async function getStudents(student_query){
    try{
        let sql;
        if(course_query){
            sql = `SELECT * FROM courses WHERE course_name LIKE %'${course_query}'% `;
        }
        else{
        sql = `SELECT * FROM courses`;
        }
        return new Promise((resolve,reject)=>{
            Connection.execute(sql,(err,results)=>{
            if(err){
                reject(err);
            }
            resolve(results);
        });
    });
    }
    catch(error){
        throw error;
    }
}
async function getStudent(Student_data){
    try{
       const sql = `SELECT * FROM courses WHERE course_name = '${course_data.course_name}' `
       return new Promise((resolve,reject)=>{
        Connection.execute(sql,(err,results)=>{
        if(err){
            reject(err);
        }
        resolve(results);
    });
});
    }catch(error){
        throw error;
    }
}

async function deleteStudent(student_data){
    try{
       const sql = `DELETE FROM students WHERE Email = '${student_data.Email}' `
       return new Promise((resolve,reject)=>{
        Connection.execute(sql,(err,results)=>{
        if(err){
            reject(err);
        }
        resolve(results);
    });
});
    }catch(error){
        throw error;
    }
}

async function dropCourse(student_data){
    try{
       const sql = `DELETE FROM registered_courses WHERE EMAIL = '${student_data.course_Email}' `
       return new Promise((resolve,reject)=>{
        Connection.execute(sql,(err,results)=>{
        if(err){
            reject(err);
        }
        resolve(results);
    });
});
    }catch(error){
        throw error;
    }
}


module.exports = {getStudentByEmail, register, register_course, getStudent, getStudents, updateStudent, deleteStudent, dropCourse}