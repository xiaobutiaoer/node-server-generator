import { Request, Response, NextFunction } from 'express'
import { normalize } from 'path'

export default function urlnormalizeMiddleware () {
  return (req: Request, res: Response, next: NextFunction) => {
    // 解决windows、Linux系统使用normalize路径分隔符不一致的问题
    const pathname = normalize(req.path)
    if (req.path !== pathname) {
      res.redirect(301, pathname)
    } else {
      next()
    }
  }
}
