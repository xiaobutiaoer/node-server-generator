import { Request, Response, NextFunction } from 'express'

export default (callback: Function) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await callback(req, res, next)
    } catch (e) {
      next(e)
    }
  }
}
