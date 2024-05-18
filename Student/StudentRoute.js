const express = require("express");
const router = express.Router();
const studentController = require("./StudentController");
const auth = require("../middlewares/auth")
const validateFn = require("../middlewares/validationFn");
const {studentLogin,register} = require("./studentValidation")

router.post("/register-course/:course_name",auth.authenticateUser,auth.authorizeUser(["student"]),studentController.registerCourse);
router.delete("/drop-course", auth.authenticateUser,auth.authorizeUser(["student"]),studentController.dropCourse);
router.post("/register",studentController.registerStudent);
router.get("/all", validateFn(register) ,studentController.getStudents)
router.get("/:name",studentController.getStudent);
router.put("/:name",studentController.updateStudent);
router.post("/login",validateFn(studentLogin),studentController.login)
router.post("/logout",auth.authenticateUser ,studentController.logout)

module.exports = router;

// router.get("/student/:name",studentController.getcourse)
// router.get("/student/",studentController.getcourse)