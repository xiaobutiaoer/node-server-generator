import { Router } from 'express'
const shopController = require('./shop')

module.exports = async function initControllers() {
  const router = Router()
  router.use('/api/shop', await shopController())
  return router;
}