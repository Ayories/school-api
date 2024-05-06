const dbConnection = require("../config/db");

function getStudentByEmail(email){
    try {
        const sql = `SELECT * FROM admin WHERE email = ${email}`;
        const result = dbConnection.execute(sql);
        console.log(result)    
    } 
    catch (error) {
        throw error
    }
}

async function updateStudent(Student_data){
    try{
        const sql = `SELECT * FROM courses WHERE course_code = '${course_data.course_code}'`
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
async function getTeacher(Teacher_data){
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

async function deleteTeacher(Teacher_data){
    try{
       const sql = `SELECT * FROM  WHERE course_name = '${course_data.course_name}' `
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
