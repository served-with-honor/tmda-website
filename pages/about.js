import { Typography } from '@mui/material';
import Page from '../components/Page'

export default function AboutPage({ posts }) {
	return (
		<Page title={'About'}>
   		<Typography variant={'h1'}>About</Typography>
  	</Page>
  )
}
