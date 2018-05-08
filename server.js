import Koa from 'koa'
import Router from 'koa-router'

const app = new Koa()

app.use(ctx => {
  ctx.body = 'xiadd'
})

app.listen(8080, () => {
  console.log('server is running')
})