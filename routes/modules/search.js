import Router from 'koa-router'
const router = new Router()

import searchCtr from '../../controller/search'

router.get('/google', searchCtr.baidu)

export default router.routes()
