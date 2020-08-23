const fetch = require('isomorphic-unfetch')

exports.authenticateRequest = function(req, res, next) {
  const token = req.session.react_cms_api_token

  if (!token) {
    return res.redirect('/login')
  }

  fetch('http://localhost:3000/api/v1/check_token', {
    method: 'GET',
    headers: {
      'Authorization': token
    }
  }).then(r => {
    if (!r.ok) {
      console.log('redir from authreq')
      return res.redirect('/login')
    }
    return next()
  })
}

exports.doLogin = function(req, res) {
  fetch('http://localhost:3000/api/v1/authenticate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      'login': req.body.username,
      'password': req.body.password
    })
  }).then(r => {
    if (!r.ok) {
      console.log('res not OK')
      return res.redirect('/login')
    }
    return r.json()
  }).then(payload => {
    if (payload && payload.token) {
      req.session.react_cms_api_token = payload.token
      return res.redirect('/')
    }
  })
}

exports.doLogout = function(req, res, next) {
  console.log('logging out')
  req.session = null

  return next()
}
