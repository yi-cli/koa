const Koa = require('koa')

const app = new Koa()

app.use(async (ctx, next) => {
  ctx.body = 'hello koa2～～'
})

app.listen(3003)
console.log('starting at http://localhost:3003')
