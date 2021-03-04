import { Router } from 'express'
import bodyParser from 'body-parser'
import userService from '../services/user'

class UserController {

  userService: any

  async init() {

    this.userService = await userService()

    const router = Router()
    router.post('/', bodyParser.urlencoded({ extended: false }), this.post)
    router.delete('/:user_id', this.delete)
    router.get('/', this.get)
    return router

  }

  post = function () {

  }

  delete = function () {

  }

  get = () => {

  }

}


const initUserController = async () => {
  const c = new UserController()
  return c.init()
}

export default initUserController