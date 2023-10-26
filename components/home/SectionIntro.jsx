import { useState, useRef, useEffect } from 'react'; 
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { PopupModal } from "react-calendly";
import siteSettings from '../../src/siteSettings';

export default function SectionIntro() {
	const [isOpen, setIsOpen] = useState(false);
	const ref = useRef(null);
	
	useEffect(() => {
		document.body.style.overflow = isOpen ? 'hidden' : 'unset';
	}, [isOpen]);
	
	const theme = useTheme();
	
	return (
		<Box sx={{ py: 12 }} ref={ref}>
			<Container maxWidth='md' align='center'>
				
				<Typography variant="sectionHeading">Medical Evidence Wins Claims!</Typography>
				
				<Typography variant="lead" sx={{ mb: 6 }}>Get your high-quality medical evidence from the medical evidence experts!</Typography>
				
				<Typography variant="body1" sx={{ my: 6 }}>Did you know that a lack of medical evidence is the #1 reason VA disability claims are denied? Medical evidence is a crucial piece of the puzzle that VA raters consider when reviewing a disability claim. Telemedica provides solutions for veterans looking to bolster their claims through high-quality medical evidence that wins claims!</Typography>
				<Typography variant="body1" sx={{ my: 6 }}>Schedule your FREE 20-minute consultation, get answers for your service-connected disability, and start on your path to well-being.</Typography>
				
				<Button
					variant='contained'
					color='secondary'
					onClick={() => setIsOpen(true)}
				>
					Book Your Free Call Now
				</Button>

			</Container>

			<PopupModal
				url={siteSettings.calendly.discoveryCall}
				rootElement={ref.current}
				open={isOpen}
				onModalClose={() => setIsOpen(false)}
				pageSettings={{
					primaryColor: theme.palette.primary.main,
					hideEventTypeDetails: true,
					hideGdprBanner: true,
				}}
			/>
			
		</Box>
	);
};