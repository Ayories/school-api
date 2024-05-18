const joi = require("joi");

const studentLogin = joi.object({
    email:joi.string().email().required(),
    password:joi.string().required()
});

const register = joi.object({
    email:joi.string().email().required(),
    password:joi.string().required(),
    Date_of_birth:joi.date().required(),
    registration_date:joi.date().required()
});

module.exports = {
    studentLogin,
    register
};
