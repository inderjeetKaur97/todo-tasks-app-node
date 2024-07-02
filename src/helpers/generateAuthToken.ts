import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

interface UserData {
  id: string;
  username: string;
}

const generateAuthToken = (userData: UserData): string => {
  console.log("helpers@generateAuthToken");
  const token = jwt.sign(userData, process.env.TOKEN_SECRET_KEY!, {
    expiresIn: `${process.env.TOKEN_EXPIRES_IN}h`,
  });
  return token;
}

export default generateAuthToken;
