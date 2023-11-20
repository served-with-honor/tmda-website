import Script from 'next/script'
import constants from '../src/constants';
import settings from '../src/siteSettings';

export default function GoogleTagManager() {
  const { gtmWidgetUrl, gtmNoScriptUrl } = constants.google;
  const { googleMeasurementId: id } = settings;

  if (!id) return <></>;
  
  return <>
    <Script src={`${gtmWidgetUrl}?id=${id}`} />
    <Script id='google-analytics'>
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${id}');
      `}
    </Script>
    <noscript>
      <iframe
        src={`${gtmNoScriptUrl}?id=${id}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      ></iframe>
    </noscript>
  </>
}
