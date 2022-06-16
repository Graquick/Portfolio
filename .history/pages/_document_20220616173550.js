import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body style={{ fontFamily: "Raleway, Roboto", scrollBehavior: "smooth" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}