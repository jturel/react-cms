import Layout from '../components/Layout'
import Link from 'next/link'
import {getPosts} from '../api/posts'


const Index = (props) => (
  <Layout>
    <h1>The Posts</h1>
    <ul>
      {props.posts.length > 0 && props.posts.map((post, i) => (
        <li key={i}>
          <Link href={`/post/${post.id}`} passHref>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async function({req}) {
  const cookie = (req && req.headers) ? req.headers.cookie : null // we might not have the req if client side rendered
  const response = await getPosts(cookie)
  const posts = await response.json()

  return {
    posts: posts
  }
}

export default Index
