const express = require("express");
const router = express.Router();

const adminController = require("./adminController");
const validateFn = require("../middlewares/validationFn");
const adminLogin = require("./adminValidation");
const auth = require("../middlewares/auth")


router.post("/login",validateFn(adminLogin),adminController.login)
router.post("/register-admin", adminController.registerAdmin)
router.post("/logout", auth.authenticateUser, adminController.logOut);

module.exports = router