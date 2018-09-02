import Layout from '../components/Layout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'


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
  const res = await fetch('http://localhost:3001/api/v1/posts')
  const data = await res.json()

  return {
    posts: data
  }
}

export default Index
