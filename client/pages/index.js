import Layout from '../components/Layout'
import React from 'react'
import { withAuth } from '../components/AuthContext'

const Index = () => (
  <Layout>
    <div>Hello!</div>
  </Layout>
)

export default withAuth(Index)
