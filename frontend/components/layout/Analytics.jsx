import Script from 'next/script'
import constants from '../../src/constants';

export default function Analytics() {
  const { google } = constants;
  return (
    google.measurementId ? <>
      <Script src={google.gtmWidgetUrl} />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${google.measurementId}');
        `}
      </Script>
      <noscript>
        <iframe
          src={google.gtmNoScriptUrl}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
    </> : null
  )
}
