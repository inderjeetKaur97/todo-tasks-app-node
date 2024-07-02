import { Request, Response } from 'express';
import { userResources } from '../resources/userResources';
import responseHandler from '../helpers/responseHandler';
import generateAuthToken from '../helpers/generateAuthToken';
import bcrypt from 'bcryptjs';


const register = async (req: Request, res: Response) => {
  try {
    const { username, password, name, email } = req.body;
    let userExist = await userResources.findUserByUsername(username)
    if (userExist)
      return responseHandler.badRequest(res, false, 'User Already Exist with username.');
    const userRegistered = await userResources.registerUser(username, password, name, email);
    if (userRegistered)
      return responseHandler.success(res, userRegistered, 'User Created Successfully');
    return responseHandler.internalServerError(res, null);
  } catch (error: any) {
    console.log("Error:userController@register", error)
    res.status(400).json({ error: error.message });
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    let userExist = await userResources.findUserByUsername(username)
    if (!userExist)
      return responseHandler.badRequest(res, false, 'Invalid Credentials');
    const match = bcrypt.compareSync(password, userExist.password);
    if (!match)
      return responseHandler.unauthorized(res, null);
    let authToken = generateAuthToken({ id: userExist._id, username: userExist.username })
    delete (userExist as any).password
    let data = { ...userExist, authToken }
    return responseHandler.success(res, data)
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const userController = { register, login };
