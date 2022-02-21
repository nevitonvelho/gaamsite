import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Gabinetes, Cubas e Acessórios para Banheiro - Gaam Gabinetes</title>

          <link rel="shortcut icon"  href="/favicon.ico" type="image/favicon.ico"/>

        </Head>
        <body>
          <Main />
          <NextScript />

         
        </body>
      </Html>
    )
  }
}

export default MyDocument