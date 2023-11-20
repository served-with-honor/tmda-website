import React, { useContext } from 'react'
import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from './Header'
import Footer from './Footer'
import settings from '../src/siteSettings';
import BookingPopup from '../components/BookingPopup'
import { BookingContext } from '../context/BookingContext'
import GoogleTagManger from './GoogleTagManager';

export default function Page({ title, description, children, darkHeader, hasHeroVideo, noindex, nofollow }) {
  const { setIsOpen: hasBookingPopup } = useContext(BookingContext);
  const router = useRouter();

  const pageTitle = `${settings.name} | ${title || settings.defaultPageTitle}`;
  const pageDescription = description || settings.defaultPageDescription;
  const url = `${settings.url}${router.asPath}`;
  const pageRobots = (
    noindex && nofollow ? 'none'
    : noindex ? 'noindex'
    : nofollow ? 'nofollow'
    : null
  );

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
        {pageRobots ? <meta name="robots" content={pageRobots} /> : null}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#74c8b4"/>
        <meta name="msapplication-TileColor" content="#74c8b4"/>
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <GoogleTagManger />
      <Header isDark={darkHeader} hasHeroVideo={hasHeroVideo} />
      <main>{children}</main>
      {hasBookingPopup ? <BookingPopup /> : null}
      <Footer />
    </>
  )
}