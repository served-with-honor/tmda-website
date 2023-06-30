import React, { useState, useEffect, useRef } from 'react'
import Head from 'next/head';
import Header from './Header'
import Footer from './Footer'
import settings from '../src/siteSettings';

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
        {settings.googleAnalyticsId !== undefined ? (<>
          <script src={`https://www.googletagmanager.com/gtag/js?id=${settings.googleAnalyticsId}`} />
          <script id="google-analytics">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${settings.googleAnalyticsId}');
            `}
          </script>
        </>) : null}
      </Head>
      <Header ref={ref} />
			<main style={{ marginTop: headerHeight }}>{children}</main>
      <Footer posts={posts} />
    </>
  )
}
