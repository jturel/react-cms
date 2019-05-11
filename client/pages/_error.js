import Layout from '../components/Layout'
import React from 'react'

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render() {
    return (
      <Layout>
        <h1>Something went wrong</h1>
        <p>
          {this.props.statusCode
            ? ` we got return code ${this.props.statusCode }`
            : ' client error '}
        </p>
      </Layout>
    )
  }
}

export default Error
