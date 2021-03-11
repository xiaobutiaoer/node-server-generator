// src/middlewares/index.js
import urlnormalizeMiddleware from './urlnormalize'
import apiLimiter from './throttling'
const { Router } = require('express')

export default function initMiddlewares () {
  const router = Router()
  router.use(apiLimiter())
  router.use(urlnormalizeMiddleware())
  return router
}
