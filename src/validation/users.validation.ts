import Joi from 'joi';
import bcrypt from 'bcryptjs';

import { Request, Response, NextFunction } from 'express';
import responseHandler from '../helpers/responseHandler';
const createUserSchema = (req: Request, res: Response, next: NextFunction) => {
  console.log("uservalidation@createUserSchema")
  let reqSchema = req.body
  let joiSchema = Joi.object({
    name: Joi.string().required(),
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  })
  let { error } = joiSchema.validate(reqSchema)
  if (error)
    return responseHandler.badRequest(res, error.details[0].message);
  else {
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(req.body.password, salt);
    reqSchema.password = hashPassword
    return next()
  }
}

const loginUserSchema = async (req: Request, res: Response, next: NextFunction) => {
  console.log("uservalidation@loginUserSchema")
  let reqSchema = req.body
  let joiSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  })
  let { error } = joiSchema.validate(reqSchema)
  if (error)
    return responseHandler.badRequest(res, error.details[0].message);
  return next()
}

export const userValidation = { createUserSchema, loginUserSchema }
