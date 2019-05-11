import Layout from '../components/Layout.js'
import {getPost} from '../api/posts'

const Post = ({post}) => (
  <Layout>
    <h1>{post.title}</h1>
    <p>{post.body}</p>
  </Layout>
)

Post.getInitialProps =  async function({query}) {
  const response = await getPost(query.id)
  const post = await response.json()

  return {
    post: post
  }
}

export default Post
