import Layout from '../components/Layout'
import Link from 'next/link'
import {getPosts} from '../api/posts'
import React from 'react'
import PropTypes from 'prop-types'

const Posts = (props) => (
  <Layout>
    <h1>The Posts</h1>
    <ul>
      {props.posts.length > 0 && props.posts.map((post, i) => (
        <li key={i}>
          <Link as={`/posts/${post.id}`} href="/posts/[id]">
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Posts.getInitialProps = async function({req}) {
  const cookie = req?.headers?.cookie
  const response = await getPosts(cookie)
  const posts = await response.json()

  return { posts }
}

Posts.propTypes = {
  posts: PropTypes.array
}

export default Posts
