import Koa from 'koa'
import views from 'koa-views'
import serve from 'koa-static'
import bodyParser from 'koa-bodyparser'
import cors from '@koa/cors'
import mount from 'koa-mount'
import path from 'path'

const app = new Koa()

app.use(views(path.resolve(__dirname, 'views'), {
  map: {
    njk: 'nunjucks'
  }
}))

app.use(bodyParser())
app.use(cors())
app.use(mount('/static', serve(path.resolve(__dirname, '../static'))))

export default app