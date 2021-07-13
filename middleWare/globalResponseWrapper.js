/*
* 全局响应处理
*/
const statusCodeMessageMap = {
    '000000': "操作成功",
    '000001': "无权限访问",
    404: "请求资源不存在",
    403: "请求资源不可用",
    405: "Method Not Allowed",
    500: "请求访问超时"
}

const responseBody = () => {
    return async (ctx, next) => {
        ctx.success = (data, type) => {
            ctx.type = type || 'json'
            ctx.body = {
                code: '000000',
                msg: statusCodeMessageMap['000000'] || '调用成功',
                data
            }
        }
        ctx.fail = (msg) => {
            ctx.type = 'json'
            ctx.body = {
                code: '000001',
                msg: statusCodeMessageMap['000001'] || '调用失败'
            }
        }
        await next()
    }
}

export default responseBody
