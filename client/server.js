const express = require('express')
const next = require('next')
//const cors = require('cors')
const middleware = require('./middleware')
const bodyParser = require('body-parser')
const session = require('express-session')
const proxy = require('http-proxy-middleware')
const morgan = require('morgan')


const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, quiet: true})
const handle = app.getRequestHandler()

const onProxyReq = function(proxyReq, req) {
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
    server.use(morgan('tiny', {
      skip: function(req) {
        return req.url.match(/_next*/)
      },
    }))

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
    /*
      .get((req, res) => {
        if (req.session.react_cms_api_token) {
          console.log('had a token')
          return res.redirect('/')
        } else {
          console.log('handling login')
          return handle(req, res)
        }
      })
      */
      .post((req, res) => {
        middleware.doLogin(req, res)
      })

    server.get('/logout', middleware.doLogout, (req, res) => {
      return handle(req, res)
    })

    server.get('*', middleware.authenticateRequest, (req, res) => {
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
