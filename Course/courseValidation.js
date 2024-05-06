const joi = require("joi");

const createCourse = joi.object({
    course_title:joi.string().required(),
    course_description:joi.string(),
    course_code:joi.string().required(),
    course_units:joi.number(),
});

const updateCourse = joi.object({
    title:joi.string(),
    description:joi.string().required(),
    course_code:joi.string(),
    course_units:joi.number(),
});

module.exports = {createCourse,updateCourse};