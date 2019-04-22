import 'bootstrap/dist/css/bootstrap.css';
import Navigation from '../components/Navigation'
import App, {Container} from 'next/app'
import React from 'react'

export default class ReactCms extends App {
  render() {
    return (<Container>
      <Head>
        <link rel="stylesheet" href="/_next/static/style.css" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Main />
      </Container/>
    )
  }
}
