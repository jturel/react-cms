import Layout from '../../components/Layout.js'
import {getPost} from '../../api/posts'
import React from 'react'
import PropTypes from 'prop-types'

const Post = ({post}) => (
  <Layout>
    <h1>{post.title}</h1>
    <p>{post.body}</p>
  </Layout>
)

Post.getInitialProps = async function({req, query}) {
  const cookie = req?.headers?.cookie
  const response = await getPost(query.id, cookie)
  const post = await response.json()

  return { post }
}

Post.propTypes = {
  post: PropTypes.object
}

export default Post
