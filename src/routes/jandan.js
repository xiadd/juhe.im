import Router from 'koa-router'
import jandanControllers from '../controllers/jandan'

const router = new Router()

// 获取无聊图
router.get('/pics', jandanControllers.getPicController)

// 获取妹子图
router.get('/ooxx', jandanControllers.getOoxxPicController)

// 点赞
router.post('/upvote/:id', jandanControllers.upvotePicController)

// 反对
router.post('/downvote/:id', jandanControllers.downvotePicController)

export default router