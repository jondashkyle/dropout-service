var getPort = require('getport')
var merry = require('merry')
var http = require('http')

var env = { PORT: 8080 }
var app = merry({ env: env })

app.use(function (req, res, ctx) {
  ctx.headers = ctx.headers || { }
  ctx.headers['Access-Control-Allow-Origin'] = '*'
  ctx.headers['Access-Control-Allow-Methods'] = 'POST, GET, PUT, DELETE, OPTIONS'
  ctx.headers['Access-Control-Allow-Credentials'] = false
  ctx.headers['Access-Control-Max-Age'] = '86400'
  ctx.headers['Access-Control-Allow-Headers'] = 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept'
})

app.route('GET', '/', function (req, res, ctx) {
  ctx.log.info('oh hey, a request here')
  ctx.send(200, { cute: 'butts' })
})

app.route('default', function (req, res, ctx) {
  // res.header('Access-Control-Allow-Origin', '*')
  // res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  ctx.log.info('Route doesnt exist')
  ctx.send(404, { message: 'nada butts here' })
})

app.listen(app.env.PORT)
console.log('Listening at http://localhost:' + app.env.PORT)