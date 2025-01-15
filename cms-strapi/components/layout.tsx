import Footer from './footer'
import Meta from './meta'
import { Header } from './header';
import * as globalData from '../lib/globalData.json';

import { Poppins } from 'next/font/google'

const font = Poppins({
  weight: "300",
  subsets: ["latin"]
})

export default function Layout({ children }) {
  return (
    <div className={font.className}>
      <Meta globalData = {globalData}/>
      <Header h1="" imageUrl={globalData.logo.url}/>
        <main>{children}</main>
      <Footer/>
    </div>
  )
}