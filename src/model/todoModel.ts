import mongoose, { Schema } from 'mongoose'

const todoSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true
    },
    title: {
      required: true,
      type: String,
    },
    description: {
      required: true,
      type: String,
    },
    dueDate: {
      required: true,
      type: Date
    },
    completed: {
      required: true,
      type: Boolean,
      default: false
    },
    setReminder: {
      required: true,
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true,
  }
)

const todoModel = mongoose.model('todos', todoSchema)
export default todoModel
