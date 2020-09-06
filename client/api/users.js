import fetch from 'isomorphic-unfetch'

export function getCurrentUser() {
  return fetch('http://localhost:3000/api/v1/users/current')
    .then(r => r.json())
    .then(data => {
      return data
    });
}
