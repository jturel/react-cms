import fetch from 'isomorphic-unfetch'

export default function doLogin(username, password) {
  return fetch('http://localhost:3000/api/v1/authenticate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      'login': username,
      'password': password
    })
  }).then(r => {
    return r.json()
  }).then(payload => {
    if (payload?.token) {
      console.log("setting token")
      localStorage.setItem('react_cms_api_token', payload.token)
    } else {
      console.log("no token...")
    }
  })
  M
}
