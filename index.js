var dropoutGet = require('dropout/lib/get')
var parseBody = require('parse-body')
var getPort = require('getport')
var merry = require('merry')
var http = require('http')

var env = { PORT: 8080 }
var app = merry({ env: env })

app.route('POST', '/', function (req, res, ctx) {
  console.log(req)
  parseBody(req, 1e6, function (err, body) {
    if (err) ctx.send(500, { message: err.message }, headers())
    ctx.log.info('request: ' + body.url)
    try {
      dropoutGet(body.url, { }, function (err, data) {
        ctx.log.info('success: ' + body.url)
        ctx.send(200, data, headers())
      })
    } catch (err) {
      ctx.log.error('error: ' + body.url)
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