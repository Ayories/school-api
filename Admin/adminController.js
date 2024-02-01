const adminModel = require('./adminModel');
const jwt = require("../utils/jwtFn")
const bcrypt = require("../utils/bcryptFn")

async function login(req, res) {
  try{
    const {email, password} = req.body;
    const admin = await adminModel.getAdminByEmail(email);

    if(!admin){
      return res.status(400).json({message:"Invalid Email"})
    }
    const isMatch = await bcrypt.comparePassword(password, admin.password);
    if(!isMatch){
      res.status(400).json({message:"Invalid Password"})
    }
    const token = jwt.generateToken({email:admin.email,role:"admin"});
    res.header("x-auth",token);
    res.status(200).json({message:"Login Successfull"});
  }
  catch(error){
    res.status(500).json({message:"Internal Server Error",error:error.message});
  }
}



function logOut(req, res) {
  try{
    res.setHeader("x-auth","");
    res.status(200).json({message:"Logout Successfull"});
  }
  catch(error){
    res.status(500).json({message:"Internal Server Error"});
  }
}


module.exports = { login, logOut}

 // connection.query(
    //   'SELECT * FROM admin WHERE email = ? AND password = ?',
    //   [email, password],
    //   (error, results) => {
    //     if (error) {
    //       console.error('Invalid email or password:');
    //       return res.status(500).json({ success: false, error: 'Invalid email or password' });
    //     }

    //     if (results.length > 0) {
    //       const token = jwt.generateToken({ role : "admin", email})
    //       console.log({"token" : token})
    //       res.json({ success: true, message: 'Login successful', data: results[0], token });
    //     } else {
    //       res.status(401).json({ success: false, error: 'Invalid credentials' });
    //     }
    //   }
    // );