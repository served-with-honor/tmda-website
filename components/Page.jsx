import React, { Fragment, useState, useEffect, useRef, useContext } from 'react'
import Script from 'next/script'
import Head from 'next/head';
import { useRouter } from 'next/router';
import parse from 'html-react-parser';
import Header from './Header'
import Footer from './Footer'
import settings from '../src/siteSettings';
import BookingPopup from '../components/BookingPopup'
import { BookingContext } from '../context/BookingContext'
import constants from '../src/constants';

export default function Page({ metadata, title, description, children, darkHeader, hasHeroVideo, noindex, nofollow }) {
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
        {metadata ? parse(metadata) : null}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={settings.name} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:locale" content="en_US" />
        {noindex || nofollow ? (
          <meta name="robots" content={`${noindex ? 'noindex' : ''}${noindex && nofollow ? ',' : ''}${nofollow ? 'nofollow' : ''}`} />
         ) : null}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#74c8b4"/>
        <meta name="msapplication-TileColor" content="#74c8b4"/>
        <meta name="theme-color" content="#ffffff" />
      </Head>
      
      <Header ref={ref} isDark={darkHeader} hasHeroVideo={hasHeroVideo} />
      <main style={{ marginTop: headerHeight }}>{children}</main>
      {hasBookingPopup ? <BookingPopup /> : null}
      <Footer />
      
      {settings.googleMeasurementId ? <>
        <Script src={constants.google.gtmWidgetUrl} />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', '${settings.googleMeasurementId}');
          `}
        </Script>
        <noscript>
          <iframe
            src={constants.google.gtmNoScriptUrl}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
      </> : null}
    </>
  )
}