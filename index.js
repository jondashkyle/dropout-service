var parseBody = require('parse-body')
var dropout = require('dropout')
var getPort = require('getport')
var merry = require('merry')
var http = require('http')

var env = { PORT: 8080 }
var app = merry({ env: env })

app.route('POST', '/', function (req, res, ctx) {
  // if (!ctx.params.url) return ctx.send(405, { message: 'No URL provided' }, headers())
  parseBody(req, 1e6, function (err, body) {
    if (err) ctx.send(500, { message: err.message }, headers())
    ctx.log.info('oh hey, a request here')
    try {
      dropout.get(body.url, { }, function (err, data) {
        ctx.send(200, data, headers())
      })
    } catch (err) {
      console.log(err)
      ctx.send(500, { message: err.message }, headers())
    }
  })


})

app.route('default', function (req, res, ctx) {
  ctx.log.info('Route doesnt exist')
  ctx.send(404, { message: 'nada butts here' }, headers())
})

app.listen(app.env.PORT)
console.log('Listening at http://localhost:' + app.env.PORT)

function headers () {
  return {
    'Access-Control-Allow-Origin': '*'
  }
}