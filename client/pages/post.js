import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout.js'

const Post = ({post}) => (
  <Layout>
    <h1>{post.title}</h1>
    <p>{post.body}</p>
  </Layout>
)

Post.getInitialProps =  async function({query}) {
  const response = await fetch(`http://localhost:3001/api/v1/posts/${query.id}`)
  const post = await response.json()

  return {
    post: post
  }
}

export default Post
