import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Page from '../components/Page'
import Link from '../src/Link';

export default function ContactUsPage() {
	return (
		<Page title={'Privacy Policy'}>
			<Box sx={{ pt: 20, mb: 10, }}>
				<Container>
						<Typography variant='h1' color='primary'>Privacy Policy</Typography>
				</Container>
			</Box>
			
			<Box sx={{ m: 10 }}>
				<Container>
					
					{/* Termly Tracking Code */}
					{/* <div name="termly-embed" data-id="3a8e7faf-2568-484f-a27d-91ba1bcda385" data-type="iframe"></div>
					<script type="text/javascript">{`(function(d, s, id) {
						var js, tjs = d.getElementsByTagName(s)[0];
						if (d.getElementById(id)) return;
						js = d.createElement(s); js.id = id;
						js.src = "https://app.termly.io/embed-policy.min.js";
						tjs.parentNode.insertBefore(js, tjs);
					}(document, 'script', 'termly-jssdk'));`}</script> */}

					<Typography variant='body1' gutterBottom>If you would like to contact us regarding Telemedica LLC, our telemedicine services, our service providers, additional services, or have a general inquiry, you can also <Link href={'/contact-us'}>click here to contact us</Link>.</Typography>
					<Typography variant='body1' gutterBottom>If you were directed to this page in error, and would like to learn more about our telemedicine services, including Nexus Letters, Medical Diagnosis, a mental evaluation, and more, please <Link href={'/'}>click here to be directed to our home page</Link>.</Typography>
					<Typography variant='body1'>If you are looking for assistance on a medical service that you have submitted, and need to locate our ticket portal - <Link href={'https://www.help.telemedicallc.com/'} target="_blank">please click here</Link>.</Typography>
				</Container>
			</Box>
  	</Page>
  )
}