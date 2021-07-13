import login from './modules/login'
import user from './modules/user'
import search from './modules/search';

export default (router) => {
  router.use('/login', login)
  router.use('/user', user)
  router.use('/search', search)
}
