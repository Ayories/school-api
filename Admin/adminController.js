const adminModel = require("./adminModel");
const jwt = require("../utils/jwtFn");
const bcrypt = require("../utils/bcryptFn");
const { message } = require("./adminValidation");

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const admin = await adminModel.getAdminByEmail(email);

    if (!admin) {
      return res.status(400).json({ message: "Invalid Email" });
    }
    const isMatch = await bcrypt.comparePassword(password, admin.password);
    if (!isMatch) {
      res.status(400).json({ message: "Invalid Password" });
    }
    const token = jwt.generateToken({ email: admin.email, role: "admin" });
    console.log(token)
    res.header("x-auth", token);
    res.status(200).json({ message: "Login Successfull", token });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}

async function registerAdmin(req, res) {
  try {
    const { email, password, role } = req.body;
    const hashedPassword = await bcrypt.hashPassword(password);
    const adminData = await adminModel.createAdmin(email, hashedPassword, role);
    return res
      .status(201)
      .json({
        status: true,
        message: "Admin created successfully",
        data: adminData,
      });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server Error", error: error.message });
  }
}

function logOut(req, res) {
  try {
    res.setHeader("x-auth", "");
    res.status(200).json({ message: "Logout Successfull" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = { login, logOut, registerAdmin };

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
