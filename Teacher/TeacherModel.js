const dbConnection = require("../config/db");

function getTeacherByEmail(email){
    try {
        const sql = `SELECT * FROM admin WHERE email = ${email}`;
        const result = dbConnection.execute(sql);
        console.log(result);
        return result;
          
    } 
    catch (error) {
        throw error
    }
}