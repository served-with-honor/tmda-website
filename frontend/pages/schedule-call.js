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
                    <Typography variant='h2' component='h1' color='primary'> Schedule A Call</Typography>
                    <Typography variant='lead' component='p' sx={{ mb: 3 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, libero.</Typography>
                    <Typography variant='body1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima laudantium beatae ratione officiis mollitia iste eveniet harum minus deleniti rem rerum animi neque sit fugit, numquam, magni reprehenderit nostrum excepturi.</Typography>
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