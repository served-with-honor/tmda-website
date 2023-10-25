import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import AddIcon from '@mui/icons-material/Add';
import Page from '../components/Page'
import siteSettings from '../src/siteSettings';

export default function CareersPage({ title, description }) {
	return (
		<Page title={title} description={description} darkHeader>
			<Box sx={{ 
				pt: 20,
				pb: 15,
				background: 'linear-gradient(to right, #2e4074 30%, #1d2646 90%)', 
				color: 'secondary.contrastText',
			}}>
				<Container>
					<Box maxWidth={700}>
						<Typography variant={'h4'} component='h1' gutterBottom>Helping veterans on their path to well-being - from anywhere in the world!</Typography>
						<Typography variant={'lead'} sx={{
							borderLeft: 'solid 3px',
							borderColor: 'primary.main',
							pl: 2,
							lineHeight: 1,
							mb: 5,
						}}>100% remote working opportunities.</Typography>
						<Button href={siteSettings.externalLinks.jobs} target='_blank' rel='noopener noreferer' variant='contained' size='lg' sx={{ fontWeight: 700, px: 3, py: 1 }}>View Job Postings</Button>
					</Box>
				</Container>
			</Box>
			
			<Box sx={{ py: 10 }}>
				<Container>
					<Typography variant={'h2'} gutterBottom align='center'>The Benefits of a Career with Telemedica</Typography>
					<List sx={{
						display: { md: 'flex' },
						flexFlow: { md: 'column wrap' },
						height: { md: 250 },
						'.MuiListItem-root': {
							width: { md: '50%' },
						},
						'.MuiListItemIcon-root': { 	
							alignSelf: 'flex-start'
						},
					}}>
						{[
							{ heading: 'Remote work:', text: 'Jobs available throughout the US and its territories.' },
							{ heading: 'Growth with us:', text: 'Opportunity to grow with the company and be promoted within.' },
							{ heading: 'Supporting the Veteran Community:', text: 'Helping veterans on their path to wellbeing.' },
							{ heading: 'Flexible Schedules:', text: 'Jobs to fit lifestyles from all walks of life.' },
						].map( ({ heading, text }, index) => {
							return(
								<ListItem key={`benefit-${index}`}>
									<ListItemIcon>
										<AddIcon color='primary'/>
									</ListItemIcon>
									<ListItemText>
										<strong>{heading}</strong><br />{text}
									</ListItemText>
								</ListItem>
							)
						})}
					</List>
				</Container>
			</Box>
  	</Page>
  )
}

export async function getStaticProps() {
	const title = 'Careers';
	const description = 'Explore A Career With Telemedica. Telemedica specializes in providing Veterans with high-quality medical evidence nationwide.';

	return { props: { title, description, }}
}
