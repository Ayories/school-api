const express = require("express");
const router = express.Router();

const adminController = require("./adminController");
const validateFn = require("../utils/validationFn");
const adminLogin = require("./adminValidation");

router.post("/login",validateFn(adminLogin),adminController.login)
router.post("/logout",adminController.logout);

module.exports = router