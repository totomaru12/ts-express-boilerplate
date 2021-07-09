import Express from 'express'
import * as user from '../models/user_model'

export const usersPage = (
  request: Express.Request,
  response: Express.Response
): void => {
  const users = user.find()
  response.render('base.ejs', {
    contentEjs: 'users.ejs',
    contentData: { users },
  })
}
