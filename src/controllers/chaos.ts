import { Router, Request, Response, NextFunction } from 'express'

const ASYNC_MS = 800

class ChaosController {
  async init () {
    const router = Router()
    router.get('/sync-error-handle', this.getSyncErrorHandle)
    router.get('/sync-error-throw', this.getSyncErrorThrow)
    router.get('/thunk-error-handle', this.getThunkErrorHandle)
    router.get('/thunk-error-throw', this.getThunkErrorThrow)
    router.get('/promise-error-handle', this.getPromiseErrorHandle)
    router.get('/promise-error-throw', this.getPromiseErrorThrow)
    return router
  }

  getSyncErrorHandle = (req: Request, res: Response, next: NextFunction) => {
    next(new Error('Chaos test - sync error handle'))
  }

  getSyncErrorThrow = () => {
    throw new Error('Chaos test - sync error throw')
  }

  getThunkErrorHandle = (req: Request, res: Response, next: NextFunction) => {
    setTimeout(() => {
      next(new Error('Chaos test - thunk error handle'))
    }, ASYNC_MS)
  }

  getThunkErrorThrow = () => {
    setTimeout(() => {
      throw new Error('Chaos test - thunk error throw')
    }, ASYNC_MS)
  }

  getPromiseErrorHandle = async (req: Request, res: Response, next: NextFunction) => {
    await new Promise((r) => setTimeout(r, ASYNC_MS))
    next(new Error('Chaos test - promise error handle'))
  }

  getPromiseErrorThrow = async (req: Request, res: Response, next: NextFunction) => {
    await new Promise((r) => setTimeout(r, ASYNC_MS))
    throw new Error('Chaos test - promise error throw')
  }
}

export default async () => {
  const c = new ChaosController()
  return await c.init()
}
