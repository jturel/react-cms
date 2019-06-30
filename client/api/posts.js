import fetch from 'isomorphic-unfetch'

export function apiOpts(cookie) {
  const opts = {}

  if (cookie) {
    opts.headers = {}
    opts.headers.cookie = cookie
  }

  opts.credentials = 'include'

  return opts
}

export function getPosts(cookie) {
  return fetch('http://localhost:3000/api/v1/posts', apiOpts(cookie))
}

export function getPost(id, cookie) {
  return fetch(`http://localhost:3000/api/v1/posts/${id}`, apiOpts(cookie))
}
