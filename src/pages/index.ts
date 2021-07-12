import Express from 'express'

export const indexPage = (
  request: Express.Request,
  response: Express.Response
): void => {
  response.render('base.ejs', { contentEjs: '' })
}
