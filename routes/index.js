import login from './modules/login'
import user from './modules/user'

export default (router) => {
  router.use('/login', login)
  router.use('/user', user)
}
