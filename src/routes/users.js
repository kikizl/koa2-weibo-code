const router = require('koa-router')()

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.post('/login', async (ctx, next) => {
  const { userName, password } = ctx.request.body
  // 登录验证的逻辑
  ctx.body = {
    tag: 100,
    userName,
    password
  }
})
 

module.exports = router
