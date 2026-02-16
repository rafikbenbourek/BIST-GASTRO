import Joi from 'joi'

export const produitSchema = Joi.object({
    nom: Joi.string().required(),
    prix: Joi.number().positive().precision(2),
    description: Joi.string().required(),
    image: Joi.string()
})