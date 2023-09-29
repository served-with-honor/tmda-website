import React, { useState, useEffect, useRef, useContext } from 'react'
import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from './Header'
import Footer from './Footer'
import settings from '../src/siteSettings';
import BookingPopup from '../components/BookingPopup'
import { BookingContext } from '../context/BookingContext'

export default function Page({ title, description, children, darkHeader }) {
  const { setIsOpen: hasBookingPopup } = useContext(BookingContext);
  const [headerHeight, setHeaderHeight] = useState(0);
  const ref = useRef(null);
  const router = useRouter();

  useEffect(() => {
    // if (ref.current) setHeaderHeight(ref.current.clientHeight);
  }, [ref])

  const pageTitle = `${settings.name} | ${title || settings.defaultPageTitle}`;
  const pageDescription = description || settings.defaultPageDescription;
  const url = `${settings.url}${router.asPath}`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={settings.name} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:locale" content="en_US" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#74c8b4"/>
        <meta name="msapplication-TileColor" content="#74c8b4"/>
        <meta name="theme-color" content="#ffffff" />
        
        {process.env.NODE_ENV === 'production' ? (
          settings.googleTagManagerId !== undefined ? (
            <>
              <script>
                {`
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${settings.googleTagManagerId}');
                `}
              </script>
            </>
          ) : settings.googleAnalyticsId !== undefined ? (
            <>
              <script src={`https://www.googletagmanager.com/gtag/js?id=${settings.googleAnalyticsId}`} />
              <script id="google-analytics">
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', '${settings.googleAnalyticsId}');
                `}
              </script>
            </>
          ) : null
        ) : null}

      </Head>
      
      {process.env.NODE_ENV === 'production' && settings.googleTagManagerId !== undefined ? (
        <noscript>
          <iframe src={`https://www.googletagmanager.com/ns.html?id=${settings.googleTagManagerId}`} height="0" width="0" style="display:none;visibility:hidden"></iframe>
        </noscript>
      ) : null}
      
      <Header ref={ref} isDark={darkHeader} />
      <main style={{ marginTop: headerHeight }}>{children}</main>
      {hasBookingPopup ? <BookingPopup /> : null}
      <Footer />
      
    </>
  )
}