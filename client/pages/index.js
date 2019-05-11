import Layout from '../components/Layout'
import Link from 'next/link'
import {getPosts} from '../api/posts'


const Index = (props) => (
  <Layout>
    <h1>The Posts</h1>
    <ul>
      {props.posts.map((post, i) => (
        <li key={i}>
          <Link href={`/post/${post.id}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async function() {
  const response = await getPosts()
  const posts = await response.json()

  return {
    posts: posts
  }
}

export default Index
