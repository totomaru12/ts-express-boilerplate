import Express from 'express'
import User from '../models/user_model'

export const usersPage = [
  async (
    request: Express.Request,
    response: Express.Response,
    next: Express.NextFunction
  ): Promise<void> => {
    try {
      const users = await User.find({}).exec()
      response.locals.users = users
      next()
    } catch (error) {
      next(error)
    }
  },
  (request: Express.Request, response: Express.Response): void => {
    response.render('base.ejs', {
      contentEjs: 'users.ejs',
      contentData: { users: response.locals.users },
    })
  },
]
