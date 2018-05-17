import Koa from 'koa'
import views from 'koa-views'
import serve from 'koa-static'
import bodyParser from 'koa-bodyparser'
import cors from '@koa/cors'
import mount from 'koa-mount'
import path from 'path'
import correctResponse from './middlewares/response'
import IndexRoutes from './routes'
import JandanRoutes from './routes/jandan'
import KuaidiRoutes from './routes/kuaidi'

const app = new Koa()

app.use(views(path.resolve(__dirname, 'views'), {
  map: {
    njk: 'nunjucks'
  }
}))

app.use(bodyParser())
app.use(cors())
app.use(correctResponse())
app.use(mount('/static', serve(path.resolve(__dirname, '../static'))))
app.use(mount('/', IndexRoutes.routes(), IndexRoutes.allowedMethods()))
app.use(mount('/jandan', JandanRoutes.routes(), JandanRoutes.allowedMethods()))
app.use(mount('/kuaidi', KuaidiRoutes.routes(), KuaidiRoutes.allowedMethods()))

export default app