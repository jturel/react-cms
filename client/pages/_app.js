import 'bootstrap/dist/css/bootstrap.css'
import App, {Container} from 'next/app'
import Head from 'next/head'

export default class ReactCms extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const {Component, pageProps} = this.props
    return (<Container>
      <Head>
        <link rel="stylesheet" href="/_next/static/style.css" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>react-cms</title>
      </Head>
      <Component {...pageProps} />
    </Container>
    )
  }
}
