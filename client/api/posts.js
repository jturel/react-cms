import fetch from 'isomorphic-unfetch'

export function getPosts() {
  return fetch('http://localhost:3001/api/v1/posts')
}

export function getPost(id) {
  return fetch(`http://localhost:3001/api/v1/posts/${id}`)
}
