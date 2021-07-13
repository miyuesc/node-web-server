/*
* 全局响应处理
*/
const statusCodeMessageMap = {
  '000000': '操作成功',
  '000001': '无权限访问',
  404: '请求资源不存在',
  403: '请求资源不可用',
  405: 'Method Not Allowed',
  500: '请求访问超时'
}

/**
 * 统一封装返回值
 * @returns {
 *   ctx.success(data, type): Fuction 成功时调用方法
 *   ctx.fail(code): Fuction 失败时调用方法
 * }
 */
const responseBody = () => {
  return async (ctx, next) => {
    try {
      ctx.success = (data, type) => {
        ctx.type = type || 'json'
        ctx.body = {
          code: '000000',
          msg: statusCodeMessageMap['000000'] || '调用成功',
          success: true,
          data
        }
      }
      ctx.fail = (code) => {
        ctx.type = 'json'
        ctx.body = {
          code: code,
          msg: statusCodeMessageMap[code] || '调用失败',
          data: null,
          success: false
        }
      }
      await next()
    } catch (e) {
      console.log(e)
    }
  }
}

export default responseBody
