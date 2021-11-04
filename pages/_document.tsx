import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { IconContext } from 'react-icons'

export default class MyDocument extends Document {
  render() {
    return (
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
        <Html lang='en'>
          <Head>
            <link rel="icon" href="http://www.yoursite.com/favicon.ico?v=2" />
          </Head>
          <body>
            <script src='noflash.js' />
            <Main />
            <NextScript />
          </body>
        </Html>
      </IconContext.Provider>
    )
  }
}
