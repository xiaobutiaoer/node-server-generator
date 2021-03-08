import UserModel from '../models/user'
import { IUser } from '../types'

class UserService {
  async findOne (username: string) {
    return await UserModel.findOne({ username })
  }

  async create (user: IUser) {
    const u = new UserModel(user)
    return u.save()
  }

  async remove (user_id: Number) {
    return await UserModel.findOneAndDelete({ user_id })
  }

  async get () {
    return await UserModel.find({})
  }
}

// 单例模式，为了在control使用多个services的时候好区分
export default () => {
  let service: any
  if (!service) {
    service = new UserService()
  }
  return service
}
