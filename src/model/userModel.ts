import mongoose, { Schema } from 'mongoose'

const usersSchema = new Schema(
  {
    name: {
      required: true,
      type: String,
    },
    email: {
      required: true,
      type: String,
    },
    username: {
      required: true,
      type: String,
      unique: true
    },
    password: {
      required: true,
      type: String,
    }
  },
  {
    timestamps: true,
  }
)

const userModel = mongoose.model('users', usersSchema)
export default userModel
