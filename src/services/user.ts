import UserModel from '../models/user'
import { IUser } from '../types'

class UserService {

  async findOne(user: IUser) {
    return await UserModel.findOne({ username: user.username })
  }

  async create(user: IUser) {
    let u = new UserModel(user)
    return u.save()
  }

  async remove(user_id: Number) {
    return await UserModel.findOneAndDelete({ user_id })
  }

  async get() {
    return await UserModel.find({})
  }

}



// 单例模式
const userService = async function () {
  let service: any
  if (!service) {
    service = new UserService()
  }
  return service
}


export default userService