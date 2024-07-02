import { Request, Response } from 'express';
import { userResources } from '../resources/userResources';
import responseHandler from '../helpers/responseHandler';
import generateAuthToken from '../helpers/generateAuthToken';
import bcrypt from 'bcryptjs';
import { todoResources } from '../resources/todoResources';


const createTodo = async (req: Request, res: Response) => {
  try {
    let userId = (req as any).user.id
    const { title, description, completed, dueDate, setReminder } = req.body;
    let todoCreated = await todoResources.createTodo(userId, title, description, dueDate, setReminder, completed)
    if (todoCreated)
      return responseHandler.success(res, todoCreated, 'Todo Created Successfully');
    return responseHandler.internalServerError(res, null);
  } catch (error: any) {
    console.log("Error:todoController@createTodo", error)
    res.status(400).json({ error: error.message });
  }
};
const updateTodo = async (req: Request, res: Response) => {
  try {
    // const { title, description, completed, dueDate, setReminder } = req.body;
    let userId = (req as any).user.id
    let todoId = (req as any).params.id
    let todoUpdated = await todoResources.updateTodo(todoId, userId, req.body)
    if (todoUpdated)
      return responseHandler.success(res, todoUpdated, 'Todo Updated Successfully');
    return responseHandler.internalServerError(res, null);
  } catch (error: any) {
    console.log("Error:todoController@updateTodo", error)
    res.status(400).json({ error: error.message });
  }
};
const fetchTodos = async (req: Request, res: Response) => {
  try {
    let userId = (req as any).user.id
    let todos = await todoResources.fetchTodos(userId)
    if (todos)
      return responseHandler.success(res, todos, 'Todos fetched Successfully');
    return responseHandler.internalServerError(res, null);
  } catch (error: any) {
    console.log("Error:todoController@fetchTodos", error)
    res.status(400).json({ error: error.message });
  }
};
const deleteTodo = async (req: Request, res: Response) => {
  try {
    let userId = (req as any).user.id
    let todoId = (req as any).params.id
    let todoDeleted = await todoResources.deleteTodo(todoId, userId)
    if (todoDeleted)
      return responseHandler.success(res, todoDeleted, 'Todo Deleted Successfully');
    return responseHandler.internalServerError(res, null);
  } catch (error: any) {
    console.log("Error:todoController@deleteTodo", error)
    res.status(400).json({ error: error.message });
  }
};


export const todoController = { createTodo, updateTodo, fetchTodos, deleteTodo };
