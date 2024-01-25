const dbConnection = require("../config/db");

function getAdminByEmail(email){
    try {
        const sql = `SELECT * FROM admin WHERE email = ${email}`;
        const result = dbConnection.execute(sql);
        console.log(result)    
    } 
    catch (error) {
        throw error
    }
}