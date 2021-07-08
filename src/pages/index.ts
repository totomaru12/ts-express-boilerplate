import Express from 'express'

export const indexPage = (req: Express.Request, res: Express.Response) => {
  const data = { message: 'index page' }
  res.send(data)
}
