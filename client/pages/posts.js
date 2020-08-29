import Layout from '../components/Layout'
import Link from 'next/link'
//import {getPosts} from '../api/posts'
import React from 'react'
import useSWR from 'swr'
import fetch from 'isomorphic-unfetch'
import { withAuth } from '../components/AuthContext'

function Posts() {
  const { posts } = useSWR('/api/v1/posts', fetch)

  return (
    <Layout>
      <h1>The Posts</h1>
      <ul>
        {posts && posts.map((post, i) => (
          <li key={i}>
            <Link as={`/posts/${post.id}`} href="/posts/[id]">
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default withAuth(Posts)
