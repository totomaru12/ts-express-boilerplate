import Express from 'express'
import { indexPage } from './pages/index'
import { usersPage } from './pages/users'

const app = Express()
const port = 3000
app.listen(port, () => {
  console.log('server start')
})

app.get('/', indexPage)
app.get('/users', usersPage)
