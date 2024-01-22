const joi = require("joi");

const studentLogin = joi.object({
    email:joi.string().email().required(),
    password:joi.string().required()
});

module.exports = studentlogin;