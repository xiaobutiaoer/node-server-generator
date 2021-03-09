// src/middlewares/index.js
import urlnormalizeMiddleware from './urlnormalize'
const { Router } = require('express')

export default function initMiddlewares () {
  const router = Router()
  router.use(urlnormalizeMiddleware())
  return router
}
