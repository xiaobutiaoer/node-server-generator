import mongoose, { Schema } from 'mongoose'
import { IUser } from '../types'

// 此处 required 为必要选项，unique 为是否唯一。
const UserSchema: Schema = new Schema({
  password: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  tel: { type: String },
  role: { type: String, required: true, default: 'user' }
})

export default mongoose.model<IUser>('User', UserSchema)
