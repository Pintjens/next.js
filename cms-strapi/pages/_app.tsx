import Layout from '@/components/layout'
import '@/styles/index.css'
import { createContext, useContext } from 'react';
import { AppProps } from 'next/app'

import { fetchGlobals } from '@/lib/api';
// get globalData from fetchGlobals ?

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <p>Data: </p>
      <Component {...pageProps} />
    </Layout>
  )
}

// getStaticProps not supported in _app -.-'