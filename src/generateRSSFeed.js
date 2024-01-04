import fs from 'fs';
import RSS from 'rss';
import { getPosts } from '../lib/wordpress';
import constants from './constants'

export default async function generateRssFeed() {
    const {
        url: siteUrl,
        defaultPageTitle,
        defaultPageDescription,
    } = constants.site;
    let posts = [];
    try {
        // TODO - Eventually the blog posts will exceed this limit and we'll need to address this
        const postsData = await getPosts({ first: 100 });
        posts = postsData.posts;
    } catch (error) {
        console.error(error);
    }

    const feedOptions = {
        title: defaultPageTitle,
        description: defaultPageDescription,
        site_url: siteUrl,
        feed_url: `${siteUrl}/rss.xml`,
        image_url: '../public/images/logo.svg',
        pubDate: new Date(),
    };

    const feed = new RSS(feedOptions);

    posts.forEach((post) => {
        const categories = post.categories.map(({ name }) => ({ 'category': name }));
        feed.item({
            title: post.title,
            description: post.excerpt,
            url: `${siteUrl}/blog/${post.slug}`,
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