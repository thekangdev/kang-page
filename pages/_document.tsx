import Document, { Html, Head, Main, NextScript } from 'next/document'

class CustomDocument extends Document {

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="manifest" href='/manifest.json' />
          <link rel="apple-touch-icon" href="/icon-192x192.png"></link>
          <meta name="theme-color" content="#00BD56" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument
