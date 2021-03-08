import { Router } from 'express'
import userController from './user'

module.exports = async function initControllers () {
  const router = Router()
  router.use('/user', await userController())
  router.use('*', (req, res) => {
    res.status(404).send('Sorry, It seems like you lost yourself >_< !')
  })

  return router
}
