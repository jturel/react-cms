import 'bootstrap/dist/css/bootstrap.css';
import Document, { Head, Main, NextScript } from 'next/document'
import Navigation from '../components/Navigation'

export default class DefaultDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="/_next/static/style.css" />
          <title>ReactCMS</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Main />
        <NextScript />
      </html>
    )
  }
}
