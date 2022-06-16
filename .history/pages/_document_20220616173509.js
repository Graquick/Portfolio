import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body style={{ fontFamily: "Raleway, Roboto, Press Start 2P", scrollBehavior: "smooth" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}