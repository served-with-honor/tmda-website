import settings from '../src/siteSettings';
import { getPosts } from '../lib/wordpress';

function generateSiteMap(pages, posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url><loc>${settings.url}</loc></url>
     ${pages.map(page => `<url><loc>${settings.url}/${page}</loc></url>`).join('')}
     ${posts.map(({ slug }) => `<url><loc>${settings.url}/blog/${slug}</loc></url>`).join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const pages = [
    'about',
    'administrative-services',
    'careers',
    'contact-us',
    'faqs',
    'privacy-policy',
    'services',
    'terms-and-conditions',
    'blog',
  ];

  let posts = [];
  try {
    // TODO - Eventually the blog posts will exceed this limit and we'll need to address this
    const postsData = await getPosts({ first: 100 });
    posts = postsData.posts;
  } catch (error) {
    console.error(error);
  }
  
  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(pages, posts);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;