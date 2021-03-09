import UserModel from '../models/user'
import { IUser } from '../types'

class UserService {
  async create (user: IUser) {
    const u = new UserModel(user)
    return u.save()
  }

  async delete (user_id: Number) {
    return await UserModel.findOneAndDelete({ user_id })
  }

  async update (username: string) {
    return await UserModel.findOne({ username })
  }

  async find (username: string) {
    return await UserModel.findOne({ username })
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
