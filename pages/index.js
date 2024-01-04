import { useRef } from 'react';
import Page from '../components/Page'
import Hero from '../components/home/Hero'
import SectionIntro from '../components/home/SectionIntro'
import SectionPrimaryActions from '../components/home/SectionPrimaryActions'
import SectionAbout from '../components/home/SectionAbout'
import SectionFeatures from '../components/home/SectionFeatures'
import SectionBenefits from '../components/home/SectionBenefits'
import SectionFAQs from '../components/home/SectionFAQs'
import SectionTestimonials from '../components/home/SectionTestimonials'
import SectionArticles from '../components/home/SectionArticles'
import NewsletterDialog from '../components/NewsletterDialog'
import generateRssFeed from '../src/generateRSSFeed';
import { getPostMetaData } from '../lib/wordpress';

export default function Home({ metadata }) {
	const newsletterPopupRef = useRef(null);
	const testimonialsRef = useRef(null);
	
	return (
		<Page hasHeroVideo metadata={metadata}>
    
			<Hero />

			<SectionIntro />
		
			<SectionPrimaryActions />
			
			<SectionAbout testimonialsRef={testimonialsRef} />

			<SectionBenefits />

			<SectionFeatures />
			
			<SectionFAQs />

			<SectionTestimonials ref={testimonialsRef} />
			
			<SectionArticles ref={newsletterPopupRef} />

			<NewsletterDialog scrollRef={newsletterPopupRef} />

		</Page>
  )
}

export async function getStaticProps() {
	const [metadata] = await Promise.all([
		getPostMetaData('/'),
		generateRssFeed(),
	]);

	return { props: { metadata } }
}
