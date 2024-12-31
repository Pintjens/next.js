import { fetchGlobals, fetchPosts } from '@/lib/api';
import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import { Header } from './header';

export default function Layout({ preview, children, globalData }) {
  return (
    <>
      <Meta />
      <Header h1="" imageUrl={globalData.logo.url}/>
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
