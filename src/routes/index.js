const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    msg: "hello msg",
    isMe: true,
    blogList: [
      {id:1,title:'aa1'},
      {id:2,title:'aa2'},
      {id:3,title:'aa3'},
      {id:4,title:'aa4'},
    ]
  })
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/profile/:userName', async (ctx, next) => {
  const { userName } = ctx.params
  ctx.body = {
    title: 'this is profile page',
    userName
  }
})

router.get('/loadMore/:userName/:pageIndex', async (ctx, next) => {
  const { userName, pageIndex } = ctx.params
  ctx.body = {
    title: 'this is loadMore',
    userName,
    pageIndex
  }
})

module.exports = router
