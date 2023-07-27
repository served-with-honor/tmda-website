import { useEffect } from 'react'
import siteSettings from '../src/siteSettings';

export default function BookingWidget() {
  useEffect(() => {
    fetch(`http://www.geoplugin.net/json.gp?`)
      .then(response => response.json())
      .then(body => {
        const { geoplugin_countryCode: countryCode, geoplugin_region: state } = body;
        if (countryCode !== 'US') throw 'Not in US';
        const formId = siteSettings.bookingForms[state];
        console.log(`State: ${state}, Form: ${formId}`);
        if (!formId) throw 'We\'re unable to determine your state at this time.';
        window.intakeqLocationId = formId;
      })
      .catch(error => console.error(error))
      .finally(() => {
        window.intakeq = "64b02a160b120a5c0a250add";
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.src = "https://intakeq.com/js/widget.min.js?1";
        document.head.appendChild(script);
      })
    ;
  }, []);
  
  return <div id="intakeq" />;
}
