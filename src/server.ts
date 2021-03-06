import express from 'express'
// import { resolve } from 'path'
import { promisify } from 'util'
import connect from './connect'
import initMiddlewares from './middlewares'
import initControllers from './controllers'
import errorHandler from './utils/error'

const server = express()
const port = parseInt(process.env.PORT || '9000')
// const publicDir = resolve('public')

async function bootstrap () {
  // 静态服务
  // server.use(express.static(publicDir))

  // 初始化中间件
  server.use(await initMiddlewares())
  // 初始化路由
  server.use(await initControllers())
  // 数据错误处理
  server.use(errorHandler)
  // 连接数据库
  const db = 'mongodb://127.0.0.1:27017/express-test'
  connect({ db })

  await promisify(server.listen.bind(server, port))()
  console.log(`> Started on port ${port}`)
}

bootstrap()
