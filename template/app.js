const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router.get('/', (ctx, next) => {
  ctx.body = 'hello koa2～～～'
  console.log(ctx.query)
})

router.post('/', (ctx, next) => {
  ctx.body = 'hello koa2 post'
})

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3003)
console.log('starting at http://localhost:3003')