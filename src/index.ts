import express from 'express'
import mongoose from 'mongoose'
const app = express()
import userRoutes from './routes/userRoutes';
import todoRoutes from './routes/todoRoutes';
import connectDb from './config/db.config'
import config from './config/env.config';
import './services/cron';
connectDb()

//middlewares
app.use(express.json())
app.use('/api/users', userRoutes)
app.use('/api/todo', todoRoutes)


//server port
app.listen(config.APPLICATION_PORT, () => {
  console.log(`Node application running at port ${config.APPLICATION_PORT}`)
})

