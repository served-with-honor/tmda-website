import Page from '../components/Page';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import texture01 from '../public/images/texture-01.jpg';
import constants from '../src/constants';
import { InlineWidget } from 'react-calendly';

export default function ScheduleCallPage({ title }) {
    return (
        <Page title={title} noindex>
            <Box sx={{
                py: 20,
                background: `url(${texture01.src}) center / cover no-repeat`,
            }}>
                <Container maxWidth='md' sx={{ textAlign: 'center'}}>
                    <Typography variant='h2' component='h1' color='primary'> Schedule A Consultation Call</Typography>
                    <Typography variant='lead' component='p' sx={{ mb: 3 }}>Learn how our medical evidence experts can help you strengthen your VA disability claim.</Typography>
                    <Typography variant='body1'>We understand the VA disability claims process can be confusing—and that includes knowing what to include when you submit your VA claim. The good news is, you don't have to figure it out alone. Get personalized guidance with a <strong>FREE</strong> Telemedica Consultation Call by scheduling below!</Typography>
                </Container>
            </Box>
            <Box sx={{ pb:12, mt: {xs: -8, lg: -14} }}>
                <InlineWidget styles={{height: '735px'}} url={constants.calendly.discoveryCall} />
            </Box>
        </Page>
    )
}

export async function getStaticProps() {
    const title = 'Schedule a Call';
    return {
        props: {
            title,
        }
    }
}