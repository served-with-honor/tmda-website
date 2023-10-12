import { useEffect } from 'react'
export default function TermlyWidget({ id }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://app.termly.io/embed-policy.min.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);
  
  return <div name='termly-embed' data-id={id} data-type='iframe' />;
}