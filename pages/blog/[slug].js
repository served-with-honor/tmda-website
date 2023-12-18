import React, { useState, useEffect } from 'react'
import parse from 'html-react-parser';
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { getPost } from '../../lib/wordpress'
import Page from '../../components/Page'
import BlogHero from '../../components/BlogHero'
import WPBlocks from '../../src/wp-blocks';
import SimpleTOC from '../../src/wp-blocks/SimpleTOC';
import NewsletterDialog from '../../components/NewsletterDialog'

export default function Post({ post }) {
	const { author, categories, title, content, featuredImage, date, modifed } = post;
	const [currentSection, setCurrentSection] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id');
        if (entry.intersectionRatio > 0) {
          setCurrentSection(`#${id}`);
        } 
      });
    });

	const headings = document.querySelectorAll('[id^="ftoc-heading"]');

    headings.forEach((section) => {
      observer.observe(section);
    });

	//handle scroll to top of page
	const handleScroll = () => {
		const scrolledToTop = window.scrollY === 0;
		if (scrolledToTop) {
		  setCurrentSection(null);
		}
	  };
  
	  window.addEventListener('scroll', handleScroll);

    return () => {
      headings.forEach((section) => {
        observer.unobserve(section);
      });
	  window.removeEventListener('scroll', handleScroll);
    };
  }, []);
	
	const isSimpleTOC = (element) => element?.attribs?.class?.includes('simpletoc-list') || element?.attribs?.class?.includes('simpletoc-title')
	
	const removeFragments = (element) => element.type !==	React.Fragment

	// Exclude SimpleTOC
	const contentComponents = parse(content, {
		trim: true,
		replace: (element) => !isSimpleTOC(element) ? WPBlocks(element) : <></>
	}).filter(removeFragments);

	const sideContent = parse(content, {
		trim: true,
		replace: (element) => isSimpleTOC(element) ? SimpleTOC(element, currentSection) : <></>
	}).filter(removeFragments);
	
	return (
		<Page title={title}>
			<BlogHero {...{ title, author, date, modifed, categories, featuredImage }} />
			
			<Box sx={{ my: 10 }}>
				<Container>
					<Grid container spacing={4}>
							<Grid item xs={12} md={4}>
								<Box sx={{position: 'sticky', top: '8rem'}}>
									{sideContent}
								</Box>
							</Grid>
						<Grid item xs={12} md={8}>{contentComponents}</Grid>
					</Grid>
				</Container>
			</Box>

			<NewsletterDialog delay={10000} />
  	</Page>
  )
}

export const getServerSideProps = async ({ params, query }) => {
	const { slug } = params;
	const { preview } = query;
	const { post } = await getPost({ slug, preview });
	return { props: { post } }
}
