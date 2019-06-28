const fetch = require('isomorphic-unfetch')
const express = require('express')
const next = require('next')
const cors = require('cors')
const middleware = require('./middleware')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


app.prepare()
  .then(() => {
    const server = express()
    server.use(cors())

    // don't authenticate nextjs assets
    server.get('/_next/*', (req, res) => {
      return handle(req, res)
    })

    server.get('/login', (req, res) => {
      app.render(req, res, '/login')
    })

    server.get('/post/:id', (req, res) => {
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
