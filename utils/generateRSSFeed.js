import fs from 'fs';
import RSS from 'rss';
import { getPosts } from '../lib/wordpress';
import settings from '../src/siteSettings'

export default async function generateRssFeed() {
    const site_url = settings.url
    
    let posts = [];
    try {
        // TODO - Eventually the blog posts will exceed this limit and we'll need to address this
        const postsData = await getPosts({ first: 100 });
        posts = postsData.posts;
    } catch (error) {
        console.error(error);
    }

    const feedOptions = {
        title: settings.defaultPageTitle,
        description: settings.defaultPageDescription,
        site_url: site_url,
        feed_url: `${site_url}/rss.xml`,
        image_url: '../public/images/logo.svg',
        pubDate: new Date(),
    };

    const feed = new RSS(feedOptions);

    posts.forEach((post) => {
        const categories = post.categories.map(({ name }) => ({ 'category': name }));
        feed.item({
            title: post.title,
            description: post.excerpt,
            url: `${site_url}/blog/${post.slug}`,
            date: post.date,
            author: post.author,
            custom_elements: [
                ...categories,
                {'featuredImage': post.image},
            ] 
        });
       });
    
    fs.writeFileSync('./public/rss.xml', feed.xml({ indent: true }));
}