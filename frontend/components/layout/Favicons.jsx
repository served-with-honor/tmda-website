import Head from 'next/head';

export default function Favicons() {
  return <Head>
    <link rel="icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#74c8b4" />
    <meta name="msapplication-TileColor" content="#74c8b4" />
    <meta name="theme-color" content="#ffffff" />
  </Head>;
}
