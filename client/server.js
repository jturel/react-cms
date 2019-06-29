const fetch = require('isomorphic-unfetch')
const express = require('express')
const next = require('next')
const cors = require('cors')
const middleware = require('./middleware')
const bodyParser = require('body-parser')
const session = require('express-session')
const proxy = require('http-proxy-middleware')
const morgan = require('morgan')


const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const onProxyReq = function(proxyReq, req, res) {
  const token = req.session.react_cms_api_token

  if (token) {
    proxyReq.setHeader('Authentication', token)
  }

  proxyReq.setHeader('Content-type', 'application/json')
  proxyReq.setHeader('Accept', 'application/json')
}

app.prepare()
  .then(() => {
    const server = express()
    //server.use(cors())
    server.use(bodyParser.urlencoded({ extended: true }))
    //server.use(morgan())

    server.use(session({
      secret: 'SUPERSECRET',
      resave: false,
      saveUninitialized: false,
      cookie: {
	  expires: 600000,
      }
    }))

    server.use(
      '/api',
      proxy({ target: 'http://localhost:3001', changeOrigin: true, onProxyReq: onProxyReq })
    )

    // don't authenticate nextjs assets
    server.get('/_next/*', (req, res) => {
      return handle(req, res)
    })

    server.route('/login')
      .get((req, res) => {
        return handle(req, res)
      })
      .post((req, res) => {
        middleware.doLogin(req, res)
      })

    server.get('/post/:id', middleware.authenticateRequest, (req, res) => {
      const actualPage = '/post'
      const queryParams = { id: req.params.id }
      app.render(req, res, actualPage, queryParams)
    })

    server.get('/*', middleware.authenticateRequest, (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, (err) => {
      if (err) throw err
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })
