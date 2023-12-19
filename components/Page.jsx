import React, { useRef, useContext } from 'react'
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
  const ref = useRef(null);
  const router = useRouter();

  const containsMetaTag = (name) => metadata && metadata.search(`name="${name}"`) > -1;

  const pageTitle = `${settings.name} | ${title || settings.defaultPageTitle}`;
  const pageDescription = description || settings.defaultPageDescription;

  return (
    <>
      <Head>
        {metadata ? parse(metadata) : null}
        {!containsMetaTag('robots') && (noindex || nofollow) ? <meta name="robots" content={`${noindex ? 'noindex' : ''}${noindex && nofollow ? ',' : ''}${nofollow ? 'nofollow' : ''}`} /> : null}
        {!containsMetaTag('title') ? <title>{pageTitle}</title> : null}
        {!containsMetaTag('description') ? <meta name="description" content={pageDescription} /> : null}
        {!containsMetaTag('og:locale') ? <meta property="og:locale" content="en_US" /> : null}
        {!containsMetaTag('og:site_name') ? <meta property="og:site_name" content={settings.name} /> : null}
        {!containsMetaTag('og:url') ? <meta property="og:url" content={`${settings.url}${router.asPath}`} /> : null}
        {!containsMetaTag('og:title') ? <meta property="og:title" content={pageTitle} /> : null}
        {!containsMetaTag('og:description') ? <meta property="og:description" content={pageDescription} /> : null}
        {!containsMetaTag('twitter:description') ? <meta property="twitter:description" content={pageDescription} /> : null}
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
      <main>{children}</main>
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