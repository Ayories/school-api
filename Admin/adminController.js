const adminModel = require('./adminModel');
const connection = require("../config/db")
const jwt = require("../utils/jwtFn")

function login(req, res) {
  try {
    const { email, password } = req.body;

   
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}



function logOut(req, res) {
  // ...
  req.session.admin = false;
  res.redirect('/login');
  // ...
}

// 

module.exports = { login, logOut, createAdmin }


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