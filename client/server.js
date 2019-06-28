const fetch = require('isomorphic-unfetch')
const express = require('express')
const next = require('next')
const cors = require('cors')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

function authenticateRequest(req, res, next) {
    fetch('http://localhost:3001/api/v1/check_token', {
        method: 'GET',
        headers: {
          'Authorization': ''
        }
    }).then(r => {
        if (r.status === 403) {
          console.log("403 at " + req.path);
          return res.redirect('/login');
        }

        return next();
    })
}

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

    server.get('/*', authenticateRequest, (req, res) => {
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
