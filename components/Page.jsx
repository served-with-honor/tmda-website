import React, { useState, useEffect, useRef } from 'react'
import Head from 'next/head';
import Header from './Header'
import Footer from './Footer'
import settings from '../src/siteSettings';

// import { Montserrat, Oswald } from 'next/font/google'


export default function Page({ title, posts, children }) {
  const [headerHeight, setHeaderHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    // if (ref.current) setHeaderHeight(ref.current.clientHeight);
  }, [ref])
  
  return (
    <>
      <Head>
        <title>{`${settings.name} | ${title ? title : settings.defaultPageTitle}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header ref={ref} />
			<main style={{ marginTop: headerHeight }}>{children}</main>
      <Footer posts={posts} />
    </>
  )
}
