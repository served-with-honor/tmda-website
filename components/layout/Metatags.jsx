import parse, { domToReact } from 'html-react-parser';
import constants from '../../src/constants';
import Head from 'next/head';

export default function Metatags({ metadata, title, description, noindex, nofollow, path }) {
  const {
    url: siteUrl,
    name: siteName,
    defaultPageTitle,
    defaultPageDescription,
  } = constants.site;

  // TODO - remove this when we have a better solution
  // Currently rankmath is adding a robots meta tag with noindex and nofollow to all pages and posts even when those are not selected
  // This is a temporary fix to remove that tag
  const removeRobotsMeta = (node) => {
    if (node.name === 'meta' && node.attribs.name === 'robots') {
      return <></>;
    }

    return domToReact(node);
  }
  const containsMetaTag = (name) => metadata && metadata.search(`name="${name}"`) > -1;
  
  const pageTitle = `${siteName} | ${title || defaultPageTitle}`;
  const pageDescription = description || defaultPageDescription;
  
  return <Head>
    {metadata ? parse(metadata, { replace: removeRobotsMeta }) : null}
    {!containsMetaTag('robots') && (noindex || nofollow) ? <meta name="robots" content={`${noindex ? 'noindex' : ''}${noindex && nofollow ? ',' : ''}${nofollow ? 'nofollow' : ''}`} /> : null}
    {!containsMetaTag('title') ? <title>{pageTitle}</title> : null}
    {!containsMetaTag('description') ? <meta name="description" content={pageDescription} /> : null}
    {!containsMetaTag('og:locale') ? <meta property="og:locale" content="en_US" /> : null}
    {!containsMetaTag('og:site_name') ? <meta property="og:site_name" content={siteName} /> : null}
    {!containsMetaTag('og:url') ? <meta property="og:url" content={`${siteUrl}${path}`} /> : null}
    {!containsMetaTag('og:title') ? <meta property="og:title" content={pageTitle} /> : null}
    {!containsMetaTag('og:description') ? <meta property="og:description" content={pageDescription} /> : null}
    {!containsMetaTag('twitter:description') ? <meta property="twitter:description" content={pageDescription} /> : null}
  </Head>;
}