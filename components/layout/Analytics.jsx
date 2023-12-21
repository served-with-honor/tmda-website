import Script from 'next/script'
import { googleMeasurementId } from '../../src/siteSettings';
import { google } from '../../src/constants';

export default function Analytics() {
  return (
    googleMeasurementId ? <>
      <Script src={google.gtmWidgetUrl} />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${googleMeasurementId}');
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
