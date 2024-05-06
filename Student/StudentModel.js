const dbConnection = require("../config/db");

function register(email,password,dob){
    try{
        const sql = `INSERT INTO students(email,password,dob) VALUES(${email},${password},${dob})`;
        const result = dBConnection.execute(sql);
        console.log(result);
        return result;
    }
    catch (error) {
        throw error
    }
}

async function updateStudent(Student_data){
    try{
        const sql = `SELECT * FROM students WHERE EMAIL = '${course_data.course_code}'`
        return new  Promise((resolve,reject)=>{
            dBConnection.execute(sql,(err,results)=>{
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
            dBConnection.execute(sql,(err,results)=>{
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
        dBConnection.execute(sql,(err,results)=>{
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
       const sql = `SELECT * FROM students WHERE EMAIL = '${student_data.course_Email}' `
       return new Promise((resolve,reject)=>{
        dBConnection.execute(sql,(err,results)=>{
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

module.exports = {register, getStudent, getStudents, updateStudent, deleteStudent}