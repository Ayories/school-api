const dbConnection = require("../config/db");

function register(email,password,dob){
    try{
        const sql = `INSERT INTO teacher(email,password,dob) VALUES(${email},${password},${dob})`;
        const result = dBConnection.execute(sql);
        console.log(result);
        return result;
    }
    catch (error) {
        throw error
    }
}

async function updateTeacher(Teacher_data){
    try{
        const sql = `SELECT * FROM courses WHERE course_code = '${Teacher_data.Email}'`
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
async function getTeachers(Teacher_query){
    try{
        let sql;
        if(course_query){
            sql = `SELECT * FROM teachers WHERE Email LIKE %'${course_query}'% `;
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
async function getTeacher(){
    try{
       const sql = `SELECT * FROM teachers WHERE Email = '${Email}' `
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

async function deleteTeacher(Teacher_data){
    try{
       const sql = `SELECT * FROM  WHERE  = '${course_data.course_name}' `
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

module.exports = {deleteTeacher, getTeacher, getTeachers}

module.exports = {
    register,
    getTeacherByEmail
}