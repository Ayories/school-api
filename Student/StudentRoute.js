const express = require("express");
const router = express.Router();
const studentController = require("./StudentController");
const middleware = require("../middlewares/auth")
const validateFn = require("../middlewares/validationFn");

router.post("/register-Course",studentController.registerCourse);
router.delete("/drop-Course",studentController.dropCourse);
router.post("/",studentController.register);
router.get("/:name",studentController.getStudents)
router.get("/:name",studentController.getStudent);
router.put("/:name",studentController.update);
router.post("/login",validateFn(studentLogin),studentController.login)
router.post("/logout",studentController.logout)


// router.get("/student/:name",studentController.getcourse)
// router.get("/student/",studentController.getcourse)