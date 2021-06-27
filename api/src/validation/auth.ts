import Joi from '@hapi/joi'

const email = Joi.string().email().min(8).max(254).lowercase().trim().required()

const password = Joi.string().min(3).max(128).trim()
.regex(/^(?=.*?[\p{Lu}])(?=.*?[\p{Ll}])(?=.*?[\d])(?=.*?[#?!@$%^&*-]).*$/u)
.message('"{#label}" must contain one uppercase letter, one lowercase letter, one special character and one digit')
.required()

const passwordConfirmation = Joi.valid(Joi.ref('password')).required()

export const registerSchema = Joi.object({
    email,
    password, 
    passwordConfirmation,
})

export const loginSchema = Joi.object({
    email,
    password
})