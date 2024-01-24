const joi = require("joi");

const createCourse = joi.object({
    email:joi.string().email().required(),
    password:joi.string().required()
});

module.exports = adminlogin;