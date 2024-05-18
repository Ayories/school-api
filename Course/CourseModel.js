const Connection = require("../config/db");

async function createCourse(course_data){
    try{
        const sql = `INSERT into courses(course_name,course_code,units,description) values(${course_data.course_name},'${course_data.course_code},${course_data.course_units},${course_data.course_description}) '`;
        return new Promise((resolve,reject)=>{
            dBConnection.execute(sql,(err,results)=>{
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
async function updateCourse(course_data){
    try{
        const sql = ` UPDATE courses SET course_name = COALESCE('${course_data.course_name}',course_name) , course_code = COALESCE('${course_data.course_code}',course_code), units = COALESCE('${course_data.course_units}',units, descriptions = COALESCE('${course_data.course_description}',descriptions)) WHERE course_code = '${formerCourse}'`
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
async function getAllCourses(course_query){
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
async function getCourse(course_data){
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

async function deleteCourse(course_data){
    try{
       const sql = `DELETE FROM courses WHERE course_name = '${course_data.course_name}' `
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
module.exports = {createCourse,updateCourse,getAllCourses,getCourse,deleteCourse}