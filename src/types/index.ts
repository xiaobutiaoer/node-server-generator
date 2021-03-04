import { Document } from 'mongoose'
export interface IUser extends Document {
  password: String
  username: String
  tel?: String
  role?: String
}