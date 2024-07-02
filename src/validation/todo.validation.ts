import Joi from 'joi';
import bcrypt from 'bcryptjs';

import { Request, Response, NextFunction } from 'express';
import responseHandler from '../helpers/responseHandler';

const createTodoSchema = (req: Request, res: Response, next: NextFunction) => {
  console.log("todovalidation@createTodoSchema")
  let reqSchema = req.body
  let joiSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    dueDate: Joi.date().required(),
    completed: Joi.boolean(),
    setReminder: Joi.boolean()
  })
  let { error } = joiSchema.validate(reqSchema)
  if (error)
    return responseHandler.badRequest(res, error.details[0].message);
  else {
    return next()
  }
}
const updateTodoSchema = (req: Request, res: Response, next: NextFunction) => {
  console.log("todovalidation@updateTodoSchema")
  let reqSchema = req.body
  let joiSchema = Joi.object({
    title: Joi.string(),
    description: Joi.string(),
    dueDate: Joi.date(),
    completed: Joi.string(),
    setReminder: Joi.boolean(),
  })
  let { error } = joiSchema.validate(reqSchema)
  if (error)
    return responseHandler.badRequest(res, error.details[0].message);
  else {
    return next()
  }
}

export const todoValidation = { createTodoSchema, updateTodoSchema }
