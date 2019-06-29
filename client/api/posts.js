import fetch from 'isomorphic-unfetch'

export function getPosts() {
  return fetch('http://localhost:3000/api/v1/posts', {credentials: 'include'})
}

export function getPost(id) {
  return fetch(`http://localhost:3000/api/v1/posts/${id}`, {credentials: 'include'})
}
