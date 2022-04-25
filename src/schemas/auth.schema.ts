import joi from 'joi'

const joiRegisterObject = joi.object({
	email: joi.string().email().required(),
	password: joi.string().min(3).max(15).required(),
	password_confirmation: joi.any().valid(joi.ref('password')).required()
})

const joiLoginObject = joi.object({
	email: joi.string().email().required(),
	password: joi.string().min(3).max(15).required(),
});

export { 
	joiRegisterObject,
	joiLoginObject,
}