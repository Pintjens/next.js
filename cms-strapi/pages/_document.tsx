import { Header } from '@/components/header'
import { fetchGlobals, fetchPosts} from '@/lib/api'
import { log } from 'console'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
