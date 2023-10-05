import fs from 'fs';
import RSS from 'rss';
import { getPosts } from '../lib/api';
import settings from '../src/siteSettings'

export default async function generateRssFeed() {
    const site_url = settings.url
    
    const response = await getPosts();
    // const allPosts = response.posts.nodes.map((post) => ({
    //     title: post.title,
    //     excerpt: post.excerpt,
    //     slug: post.slug,
    //     date: post.date,
    //     image: post.featuredImage?.node?.mediaItemUrl,
    //     categories: post.categories.edges?.map(a => a.node),
    //     author: post.author.node.name,
    // }));

    const feedOptions = {
        title: settings.defaultPageTitle,
        description: settings.defaultPageDescription,
        site_url: site_url,
        feed_url: `${site_url}/rss.xml`,
        image_url: '../public/images/logo.svg',
        pubDate: new Date(),
    };

    const feed = new RSS(feedOptions);

    response.posts.nodes.forEach((post) => {
        feed.item({
            title: post.title,
            description: post.excerpt,
            url: `${site_url}/blog/${post.slug}`,
            date: post.date,
            author: post.author.node.name,
            custom_elements: [
                {'categories': post.categories.edges?.map(a => a.node.name)},
            ] 
        });
       });
    
    fs.writeFileSync('./public/rss.xml', feed.xml({ indent: true }));
}