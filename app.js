const Koa = require('koa')


const app = new Koa()

app.use( async ( ctx, next ) => {
  ctx.body = 'hello koa2'
  console.log(1)
  next()
  console.log(2)
})

app.use( async ( ctx, next ) => {
  ctx.body = 'hello koa2'
  console.log(3)
  next()
})

app.use( async ( ctx, next ) => {
  ctx.body = 'hello koa2'
  console.log(4)
  next()
  console.log(5)
})


app.listen(3003)
console.log('starting at http://localhost:3003')
