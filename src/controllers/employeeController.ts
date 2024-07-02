import express from 'express'
import userModel from '../model/userModel'
class employeeController {
  getAllEmployee = async (request: express.Request, response: express.Response) => {
    try {
      const employees = await userModel.find()
      return response.status(200).send({ data: employees })
    } catch (error) {
      return response.sendStatus(500)
    }
  }
  getEmployee = async (request: express.Request, response: express.Response) => {
    try {
      const id = request.params
      const employee = await userModel.findById(id)
      return response.status(200).send({ data: employee })
    } catch (error) {
      return response.sendStatus(500)
    }
  }
  createEmployee = async (request: express.Request, response: express.Response) => {
    try {
      const { name, email, dob, doj, mobile } = request.body
      const employee = new userModel({ name, email, dob, doj, mobile })
      await employee.save()
      return response.status(200).send({ message: 'created employee !', data: employee })
    } catch (error) {
      console.log(error);
      return response.sendStatus(500)
    }
  }
}


export default new employeeController()
