import Layout from '../components/Layout.js'
import {getPost} from '../api/posts'

const Post = ({post}) => (
  <Layout>
    <h1>{post.title}</h1>
    <p>{post.body}</p>
  </Layout>
)

Post.getInitialProps = async function({req, query}) {
  const cookie = (req && req.headers) ? req.headers.cookie : null // handle both client & server rendering
  const response = await getPost(query.id, cookie)
  const post = await response.json()

  return {
    post: post
  }
}

export default Post
