import { Router } from 'express'
import userController from './user'
import chaosController from './chaos'

export default async () => {
  const router = Router()
  router.use('/user', await userController())
  router.use('/chaos', await chaosController())
  router.use('*', (req, res) => {
    res.status(404).send('Sorry, It seems like you lost yourself >_< !')
  })

  return router
}
