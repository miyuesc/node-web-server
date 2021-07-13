import Koa2  from 'koa'
// 中间件
import Logger from 'koa-logger'
import Cors from '@koa/cors'
import BodyParser from 'koa-bodyparser'
import Helmet from '../middleWare/helmet'
// 路由
import Router from 'koa-router'
import routes from '../routes'
// 全局返回值处理
import responseWrapper from '../middleWare/globalResponseWrapper'
// 服务配置
import { host, port } from '../config/index'

const app = new Koa2()

// 设置Http头保障应用程序安全
app.use(Helmet())

// 加载日志中间件
// if (process.env.NODE_ENV === 'development') {
app.use(Logger())
// }

// 跨域配置
app.use(Cors())

// 请求体转码
app.use(BodyParser({
    enableTypes: ['json'],
    jsonLimit: '5mb',
    strict: true,
    onerror: function (err, ctx) {
        ctx.throw('body parse error', 422)
    }
}))

// 返回值格式统一
app.use(responseWrapper())

// 加载路由
const router = new Router()
routes(router)
app.use(router.routes())
app.use(router.allowedMethods())

// 启动服务
app.listen(port, host, () => {
    console.log(`Application server is running on http://localhost:${port}`)
})

export default app
