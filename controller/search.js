import { get } from '../lib/http'
// import axios from 'axios';

async function baidu(ctx) {
  const data = await get('http://www.baidu.com/s?wd=vue')
  console.log('data', data)
  ctx.success(data, 'text/html')
}


async function google(ctx) {
  // eslint-disable-next-line max-len
  const data = await axios.get('https://www.google.com.hk/search?q=%E8%B0%83%E7%94%A8%E8%B0%B7%E6%AD%8C%E6%90%9C%E7%B4%A2api')
  console.log('data', data)
  ctx.success(data)
}

export default {
  baidu,
  google
}
