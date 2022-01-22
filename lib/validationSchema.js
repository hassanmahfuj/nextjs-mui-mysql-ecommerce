const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string()
    .trim()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().min(5).max(50).required(),
});

module.exports = {
  loginSchema,
};
