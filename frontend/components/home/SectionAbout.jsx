import { useRef } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '../../src/Link';
import Counter from '../Counter'
import CircleFiller from '../CircleFiller'

export default function SectionAbout({ testimonialsRef }) {
  const counterRef = useRef(null);
  const theme = useTheme();

  const scrollToTestimonials = (event) => {
    event.preventDefault();
    window.history.replaceState({}, '', '#testimonials');
    testimonialsRef?.current?.scrollIntoView({ behavior: 'smooth' })
  }
  
  return (
    <Box sx={{
      background: 'linear-gradient(-135deg, #e2f5f1 0%, #d5d9e4 100%)',
      py: { xs: 7, md: 10, },
      textAlign: { xs: 'center', md: 'left' },
    }}>
      <Container>
        <Grid container={true} spacing={5} sx={{ alignItems: 'center' }}>
          <Grid item md={8}>
            
          <Typography variant={'h3'} component={'h2'} color='secondary' sx={{
              mb: 5,
              'span': { display: { xs: 'block', lg: 'inline' } },
            }}>
              Changing Lives&nbsp;
              <Box component={'span'} color='secondary.800' sx={{ fontWeight: 300 }}>
                One Veteran At A Time
              </Box>
            </Typography>
              
            <Typography variant={'body1'}>
              We've delivered life changing medical evidence to more than 20,000 Veterans, and we hope we can provide the same for YOU! But don't just take our word for it,{' '}
              <Link href={'#testimonials'} color={'inherit'} sx={{ fontWeight: '700' }} onClick={scrollToTestimonials}>read what other Veterans are saying</Link>
              {' '}about Telemedica LLC.</Typography>
          </Grid>
          <Grid item md={4} sx={{ mx: 'auto' }}>
            <Box ref={counterRef} sx={{ position: 'relative', height: 275, width: 275, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Box sx={{
                position: 'absolute',
                height: '100%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <CircleFiller parentRef={counterRef} color={theme.palette.primary.main} color2={theme.palette.primary['100']} radius={120} stroke={35} percent={65} />
              </Box>
              <Box sx={{
                fontSize: 30,
                textAlign: 'center',
                textTransform: 'uppercase',
                position: 'relative',
              }}>
                <Typography component={'span'} sx={{ display: 'block', fontSize: 22, lineHeight: 1.2 }}>More Than</Typography>
                <Typography component={'span'} sx={{ display: 'block', fontSize: 40, lineHeight: 1.2 }}>
                  <Counter to={20000} parentRef={counterRef} />
                </Typography>
                <Typography component={'span'} sx={{ display: 'block', fontSize: 22, lineHeight: 1.2 }}>Veterans</Typography>
                <Typography component={'span'} sx={{ display: 'block', fontSize: 30, lineHeight: 1.2 }}>Served</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
