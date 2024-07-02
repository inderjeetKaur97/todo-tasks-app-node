import express, { Router } from 'express'
import employeeController from '../controllers/employeeController'

const router = Router()
router.get('/employee', employeeController.getAllEmployee)
router.get('/employee/:id', employeeController.getEmployee)
router.post('/employee', employeeController.createEmployee)

export default router