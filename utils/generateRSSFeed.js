import fs from 'fs';
import RSS from 'rss';
import { getPosts } from '../lib/api';

export default async function generateRssFeed() {
    const site_url = 'localhost:3000';
    
    const response = await getPosts();
    const allPosts = response.posts.nodes.map((post) => ({
        title: post.title,
        excerpt: post.excerpt,
        slug: post.slug,
        date: post.date,
        image: post.featuredImage?.node?.mediaItemUrl,
        categories: post.categories.edges?.map(a => a.node),
    }));

    const feedOptions = {
        title: 'Blog posts | RSS Feed',
        description: 'Checkout the blog posts',
        site_url: site_url,
        feed_url: `${site_url}/rss.xml`,
        image_url: `${site_url}/logo.png`,
        pubDate: new Date(),
    };

    const feed = new RSS(feedOptions);

    allPosts.map((post) => {
        feed.item({
         title: post.title,
         description: post.excerpt,
         url: `${site_url}/blog/${post.slug}`,
         date: post.date,
        });
       });
    
    fs.writeFileSync('./public/rss.xml', feed.xml({ indent: true }));
}