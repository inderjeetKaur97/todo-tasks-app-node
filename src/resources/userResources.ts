import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import userModel from '../model/userModel';
import mongoose from 'mongoose';
dotenv.config();

const registerUser = async (username: string, password: string, email: string, name: string) => {
  try {
    const userData = new userModel({
      name, username, email, password
    })
    let result = await userData.save()
    if (result)
      return true
    else return false
  } catch (error) {
    console.log("Error:userResources@registerUser", error)
    return false
  }
};
const findUserByUsername = async (username: string) => {
  try {
    const result = await userModel.findOne({ username })
    if (result)
      return (result as any)._doc
    else return false
  } catch (error) {
    console.log("Error:userResources@findUserByUsername", error)
    return false
  }
};
const findUserById = async (userId: any) => {
  try {
    const result = await userModel.findOne({ _id: new mongoose.Types.ObjectId(userId) })
    if (result)
      return (result as any)._doc
    else return false
  } catch (error) {
    console.log("Error:userResources@findUserById", error)
    return false
  }
};


export const userResources = { registerUser, findUserByUsername, findUserById };
