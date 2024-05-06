const dBConnection = require("../config/db");

async function getAdminByEmail(Email){
    try{
        const sql = `SELECT * FROM admin WHERE email = '${Email}'`;
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

module.exports = {getAdminByEmail}