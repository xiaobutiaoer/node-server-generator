export default (err: any, req: any, res: any, next: any) => {
  // 最后一层中间件，捕获token验证的问题
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('invalid token')
    return false
  }
  if (res.headersSent) {
    // 如果是在返回响应结果时发生了异常
    // 那么交给 express 内置的 finalhandler 关闭链接
    return next(err)
  } else {
    console.log(err)
    res.status(500).send(err)
  }
}
