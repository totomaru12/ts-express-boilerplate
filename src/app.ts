import Express from 'express'
import { indexPage } from './pages/index'
import { usersPage } from './pages/users'
import mongoose from 'mongoose'

// mongoDB
mongoose.connect('mongodb://localhost:27017/test_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// create server application
export const app = Express()

// set static folder
app.use(Express.static(`${__dirname}/public`))

// use ejs as html template engine
app.set('view engine', 'ejs')
app.set('views', `${__dirname}/views`)

// routing
app.get('/', indexPage)
app.get('/users', usersPage)

// listen
const port = 3000
export const server = app.listen(port, () => {
  console.log('server start')
})
