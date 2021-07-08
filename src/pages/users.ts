import Express from 'express'

export const usersPage = (req: Express.Request, res: Express.Response) => {
  const data = { message: 'users page' }
  res.send(data)
}
