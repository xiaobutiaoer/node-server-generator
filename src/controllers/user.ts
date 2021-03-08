import { Router, Request, Response } from 'express'
import bodyParser from 'body-parser'
import userService from '../services/user'

class UserController {

  userService: any

  async init() {

    this.userService = await userService()
    const router = Router()
    router.post('/', bodyParser.urlencoded({ extended: false }), this.post)
    // router.get('/', this.get)
    return router

  }

  post = async (req: Request, res: Response) => {
    const user = await this.userService.create(Object.assign({}, req.body, {
      password: req.body.password
    }))
    console.log(Object.assign({}, req.body, {
      password: req.body.password
    }))
    res.send({
      code: res.statusCode,
      message: '注册成功',
      data: user
    })
  }

  // get = async (req: Request, res: Response) => {
  //   const list = await this.userService.get({ ...req.query })
  //   res.send({ success: true, data: list })
  // }

}


const initUserController = async () => {
  const c = new UserController()
  return c.init()
}

export default initUserController