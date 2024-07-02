import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import todoModel from '../model/todoModel';
import mongoose from 'mongoose';
dotenv.config();

const createTodo = async (userId: string, title: string, description: string, dueDate: Date, setReminder: boolean = false, completed: boolean = false) => {
  try {
    const todoData = new todoModel({
      userId, title, description, dueDate, setReminder, completed
    })
    let result = await todoData.save()
    if (result)
      return true
    else return false
  } catch (error) {
    console.log("Error:todoResources@createTodo", error)
    return false
  }
};
const updateTodo = async (id: string, userId: string, todoData: any) => {
  try {
    const result = await todoModel.updateOne({ _id: new mongoose.Types.ObjectId(id), userId }, todoData)
    if (result)
      return result
    else return false
  } catch (error) {
    console.log("Error:todoResources@updateTodo", error)
    return false
  }
};
const deleteTodo = async (id: string, userId: string) => {
  try {
    const result = await todoModel.deleteOne({ _id: new mongoose.Types.ObjectId(id), userId })
    if (result)
      return true
    else return false
  } catch (error) {
    console.log("Error:todoResources@deleteTodo", error)
    return false
  }
};
const fetchTodos = async (userId: string) => {
  try {
    const result = await todoModel.aggregate([
      { $match: { userId: new mongoose.Types.ObjectId(userId) } },
      {
        $group: {
          _id: { $dateToString: { format: '%Y-%m-%d', date: '$dueDate' } }, // Group by day of dueDate
          todos: {
            $push: {
              _id: '$_id',
              title: '$title',
              description: '$description',
              completed: '$completed',
              setReminder: '$setReminder',
            },
          },
        },
      },
      { $sort: { _id: -1 } }, // Sort by dueDate in descending order (most recent first)
    ]).exec();
    if (result)
      return result
    else return false
  } catch (error) {
    console.log("Error:todoResources@fetchTodos", error)
    return false
  }
};
const fetchAllDues = async (condition: any) => {
  try {
    const result = await todoModel.find(condition)
    if (result)
      return result
    else return []
  } catch (error) {
    console.log("Error:todoResources@fetchAllDues", error)
    return []
  }
};

export const todoResources = { createTodo, updateTodo, deleteTodo, fetchTodos, fetchAllDues };
