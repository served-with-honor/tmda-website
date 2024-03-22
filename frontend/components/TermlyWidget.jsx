import { useEffect } from 'react';
import constants from '../src/constants';

export default function TermlyWidget({ id }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = constants.termly.embedUrl;
    script.async = true;
    document.body.appendChild(script);
  }, []);
  
  return <div name='termly-embed' data-id={id} data-type='iframe' />;
}