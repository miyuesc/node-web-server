import axios from 'axios'

let instance;

const init = () => {
  if (instance) {
    return instance
  }

  const instance = axios.create({
    timeout: 30 * 1000
  })

  instance.interceptors.response.use(
    success => {
      return success.data
    }, error => {
      return Promise.reject(error)
    })

  return instance
}

const getInstance = () => {
  if (!instance) {
    return init();
  }
  return instance;
};

export const get = (url, config) => getInstance().get(url, config)

export const post = (url, data, config) => getInstance().post(url, data, config)

export default {
  getInstance,
  get,
  post
}
