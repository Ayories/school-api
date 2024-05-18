const Connection = require("../config/db");

async function getTeacherByEmail(email){
    try{
        const sql = `SELECT * FROM teachers WHERE Email = '${email}'`;
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


function register(email,password,dob){
    try{
        const sql = `INSERT INTO teacher(Email,Pass_word,Date_of_birth) VALUES(${email},${password},${dob})`;
        const result = Connection.execute(sql);
        console.log(result);
        return result;
    }
    catch (error) {
        throw error
    }
}


async function updateTeacher(teacherData){
    try{
        const { formerEmail, email,dob,password }= teacherData;
        const sql = `UPDATE teachers SET Email = COALESCE('${email}',email) , Date_of_birth = COALESCE('${dob}',Date_of_birth), Password = COALESCE('${password}',Password) WHERE Email = '${formerEmail}'`
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

function handleCourse(email,password,dob){
    try{
        const sql = `INSERT INTO handled_courses(Email,Pass_word,Date_of_birth) VALUES(${email},${password},${dob})`;
        const result = Connection.execute(sql);
        console.log(result);
        return result;
    }
    catch (error) {
        throw error
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
async function getTeacher(Teacher_data){
    try{
       const sql = `SELECT * FROM teachers WHERE Email = '${Email}' `
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

async function deleteTeacher(Teacher_data){
    try{
       const sql = `SELECT * FROM teachers WHERE Email = '${Teacher_data.Email}' `
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

module.exports = {register, handleCourse, getTeacherByEmail, deleteTeacher, getTeacher, getTeachers, updateTeacher}
