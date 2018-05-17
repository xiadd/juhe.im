import Router from 'koa-router'
import kuaidiController from '../controllers/kuaidi'

const router = new Router()

router.get('/info', kuaidiController.kuaidiInfoController)

export default router