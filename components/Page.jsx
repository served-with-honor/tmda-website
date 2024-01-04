import { useRef, useContext } from 'react'
import { useRouter } from 'next/router';
import Metatags from './layout/Metatags'
import Favicons from './layout/Favicons'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Analytics from './layout/Analytics'
import BookingPopup from '../components/BookingPopup'
import { BookingContext } from '../context/BookingContext'

export default function Page({ metadata, title, description, children, darkHeader, hasHeroVideo, noindex, nofollow }) {
  const { setIsOpen: hasBookingPopup } = useContext(BookingContext);
  const ref = useRef(null);
  const router = useRouter();
  const path = router.asPath;

  return (
    <>
      <Metatags {...{ metadata, title, description, noindex, nofollow, path }} />
      <Favicons />
      <Header ref={ref} isDark={darkHeader} hasHeroVideo={hasHeroVideo} />
      <main>{children}</main>
      {hasBookingPopup ? <BookingPopup /> : null}
      <Footer />
      <Analytics />
    </>
  )
}