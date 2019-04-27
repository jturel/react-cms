import 'bootstrap/dist/css/bootstrap.css';
import Navigation from '../components/Navigation'
import App, {Container} from 'next/app'
import Head from 'next/head'
import React from 'react'

export default class ReactCms extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);

    }

    return { pageProps }
  }


  render() {
    const {Component, pageProps} = this.props
    return (<Container>
      <Head>
        <link rel="stylesheet" href="/_next/static/style.css" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>foo</title>
      </Head>
      <Component {...pageProps} />
      </Container>
    )
  }
}
