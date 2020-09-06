import Layout from '../components/Layout'
import React from 'react'
import { withAuth } from '../components/AuthContext'

function Index() {
  return(<Layout>
    <div>Hello!</div>
  </Layout>
  )
}

export default withAuth(Index)
