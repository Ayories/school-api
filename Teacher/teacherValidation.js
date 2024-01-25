const joi = require("joi");

const teacherLogin = joi.object({
    email:joi.string().email().required(),
    password:joi.string().required()
});

const register = joi.object({
    email:joi.string().email().required(),
    password:joi.string().required(),
    Date_of_birth:joi.int.date().required(),
    registration_date:joi.int.date().required()
});

module.exports = {
    teacherLogin,
    register
};