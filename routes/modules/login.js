import Router from 'koa-router'
const router = new Router()

import loginCtr from '../../controller/login'

router.post('/', loginCtr.login)

export default router.routes()
