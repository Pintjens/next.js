import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import { Header } from './header';
import * as globalData from '../lib/globalData.json';


export default function Layout({ children }) {
  return (
    <>
      <Meta globalData = {globalData}/>
      <Header h1="" imageUrl={globalData.logo.url}/>
      <div className="min-h-screen">
        <Alert/>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}