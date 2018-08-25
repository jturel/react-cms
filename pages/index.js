import Layout from '../components/Layout'
import Link from 'next/link'

const PostLink = (props) => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const Index = () => (
  <Layout>
    <h1>The Posts</h1>
    <ul>
      <PostLink title="First one" />
      <PostLink title="Second one" />
      <PostLink title="Third one" />
    </ul>
  </Layout>
)

export default Index
