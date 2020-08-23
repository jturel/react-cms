import 'bootstrap/dist/css/bootstrap.css'
import App from 'next/app'
import Head from 'next/head'
import React from 'react'

export default class ReactCms extends App {
  render() {
    const {Component, pageProps} = this.props
    return (
      <React.Fragment>
        <Head>
          <title>react-cms</title>
        </Head>
        <Component {...pageProps} />
      </React.Fragment>
    )
  }
}
