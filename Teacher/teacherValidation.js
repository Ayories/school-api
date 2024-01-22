const joi = require("joi");

const teacherLogin = joi.object({
    email:joi.string().email().required(),
    password:joi.string().required()
});

module.exports = teacherLogin;