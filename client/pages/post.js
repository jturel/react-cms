import {withRouter} from 'next/router'
import Layout from '../components/Layout.js'

const Post = withRouter((props) => (
  <Layout>
    <h1>{props.router.query.title}</h1>
    <p>something goes here</p>
  </Layout>
))

export default Post
