import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config/env.config";
import responseHandler from "../helpers/responseHandler";
import { Request, Response, NextFunction } from "express";
import { userResources } from "../resources/userResources";

interface DecodedToken {
  id: string;
  username: string;
}
const userAuth = async (req: Request, res: Response, next: NextFunction) => {
  console.log("middlewares@userAuth")
  try {
    let token: any = req.headers['auth-token']
    let jwtSecret: any = config.TOKEN_SECRET_KEY
    let decoded = jwt.verify(token, jwtSecret) as JwtPayload
    if (!decoded)
      return responseHandler.unauthorized(res, null, "You do not have correct rights to perfrom this action!");
    let userFound = await userResources.findUserByUsername(decoded.username)
    if (!userFound)
      return responseHandler.unauthorized(res, null);
    (req as any).user = decoded
    return next()
  } catch (error) {
    console.log("middlewares@userAuth", error)
    return responseHandler.unauthorized(res, null);
  }
}

export default userAuth
