import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { IconContext } from 'react-icons'

export default class MyDocument extends Document {
  render() {
    return (
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
        <Html lang='en'>
          <Head>
            <link rel='shortcut icon' href='/favicon.png' />
            <link
              rel='icon'
              type='image/png'
              sizes='96x96'
              href='/favicon-96x96.png'
            />
            <link
              rel='icon'
              type='image/png'
              sizes='32x32'
              href='/favicon-32x32.png'
            />
            <link
              rel='icon'
              type='image/png'
              sizes='16x16'
              href='/favicon-16x16.png'
            />
            <meta property='og:type' content='website' />
            <meta property='og:url' content='https://dv-juoh.me' />
            <meta property='og:title' content='DV JUOH BLOG' />
            <meta
              property='og:image'
              content='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b92e2269-6880-4487-a8b4-357aba25279d/IMG_20170212_224018_693.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20211104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211104T042851Z&X-Amz-Expires=86400&X-Amz-Signature=12805b279f47998d634e18f949864f233f139c469264bb238c02ea4d16c2d8d1&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22IMG_20170212_224018_693.jpg%22'
            />
            <meta
              property='og:description'
              content='일상의 개발 기록, 흔적이 모이는 공간 '
            />
            <link rel='manifest' href='/manifest.json' />
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
