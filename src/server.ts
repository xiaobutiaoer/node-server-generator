import express from 'express'
import { resolve } from 'path'
import { promisify } from 'util'
import connect from './connect'

const initControllers = require('./controllers')

const server = express()
const port = parseInt(process.env.PORT || '9000')
const publicDir = resolve('public')

async function bootstrap () {
  // 静态服务
  server.use(express.static(publicDir))

  // 初始化中间件

  // 初始化路由
  server.use(await initControllers())

  // 连接数据库
  const db = 'mongodb://127.0.0.1:27017/express-test'
  connect({ db })

  await promisify(server.listen.bind(server, port))()
  console.log(`> Started on port ${port}`)
}

bootstrap()
