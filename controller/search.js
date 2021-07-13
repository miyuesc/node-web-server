import { get } from '../lib/http'

async function baidu(ctx) {
  const data = await get('http://www.baidu.com/s?wd=vue')
  ctx.success(data, 'text/html')
}


async function google(ctx) {
  // eslint-disable-next-line max-len
  const data = await get('https://www.google.com.hk/search?q=%E8%B0%83%E7%94%A8%E8%B0%B7%E6%AD%8C%E6%90%9C%E7%B4%A2api')
  ctx.success(data)
}

export default {
  baidu,
  google
}
