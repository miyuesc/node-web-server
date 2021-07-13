import Router from 'koa-router'
import userCtr from '../../controller/user'

const router = new Router()

router.get('/userInfo', userCtr.getUserInfo)
router.get('/error', userCtr.getErrorMsg)

export default router.routes()
