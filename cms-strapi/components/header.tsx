 
import { usePathname } from 'next/navigation'
import Link from 'next/link'

interface HeaderProps{
  h1: string
  imageUrl: string
};

export function Header({h1, imageUrl} : HeaderProps){
  const pathname = usePathname()
 
  return (
    <header>
      <div className='banner' id= {pathname === '/' ? "homeBanner" : ""}>dit is een optionele banner op de homepage</div>

      {/* dont show logo on gallerypage */}
      {
        pathname != '/gallery' &&
        <>
          <h1>{h1}</h1>
          <img className="hero-logo" src={imageUrl} alt="" width="180px" />
        </>
      }


      <nav>
        <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
          Home
        </Link>
  
        <Link
          className={`link ${pathname === '/healings' ? 'active' : ''}`}
          href="/healings"
          >
          Healings
        </Link>

        <Link
          className={`link ${pathname === '/workshops' ? 'active' : ''}`}
          href="/workshops"
          >
          Workshops
        </Link>

        <Link
          className={`link ${pathname === '/gallery' ? 'active' : ''}`}
          href="/gallery"
          >
          Gallery
        </Link>

        <Link
          className={`link ${pathname === '/about' ? 'active' : ''}`}
          href="/about"
          >
          About
        </Link>

        <Link
          className={`link ${pathname === '/www-of-love' ? 'active' : ''}`}
          href="/www-of-love"
          >
          WWW of Love
        </Link>
      </nav>
    </header>
  )
}