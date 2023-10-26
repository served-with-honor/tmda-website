import { useContext } from 'react';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles';
import TextFlipper from '../TextFlipper';
import { BookingContext } from '../../context/BookingContext'
import siteSettings from '../../src/siteSettings';

export default function Hero() {
  const { setIsOpen } = useContext(BookingContext);
  const theme = useTheme();
  
  return (
    <Box sx={{
      backgroundColor: '#eee',
      minHeight: { lg: '80vh' },
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      py: 15,
    }}>

      <Box sx={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        opacity: '0.75',
        top: 0,
        left: 0,
      }}>
        <video autoPlay loop muted playsInline style={{ height: '100%', width: '100%', objectFit: 'cover' }}>
          <source src='/videos/hero-reel-01.mp4' type="video/mp4" />
        </video>
      </Box>
      
      <Container sx={{ position: 'relative' }}>
        <Typography variant={'h1'} color={'secondary'} fontSize={30} sx={{ textTransform: 'uppercase' }}>
          Empowering <br />Veterans
				</Typography>
        <Typography variant={'body1'} sx={{
          fontStyle: 'italic',
          maxWidth: 600,
          mb: 5,
          fontSize: { xs: 26, sm: 30 },
          'br': { display: { xs: 'none', sm: 'block' } },
        }}>
          with Quality&nbsp;
					<Box component='span' sx={{ display: { xs: 'block', sm: 'inline' } }}>
            <TextFlipper items={['Nexus Letters', 'DBQs', 'IMOs', 'Medical Evidence', 'Medical Evals', 'Mental Health Evals', 'Recurring Care']} lineColor={theme.palette.primary.main} />&nbsp;
          </Box>
          <br />
          for VA Disability Claims.
        </Typography>
        
        <Grid container spacing={2}>
            <Grid item>
              <Button
                variant='outlined'
                color='secondary'
                size='large'
                sx={{ backgroundColor: 'secondary.100' }}
                href={siteSettings.externalLinks.patientPortal}
                target='_blank'
              >
                Patient Portal
              </Button>
            </Grid>
            
            <Grid item>
              <Button
                variant='contained'
                color='secondary'
                size='large'
                onClick={() => setIsOpen(true)}
              >
                Book Now
              </Button>
            </Grid>
            
        </Grid>

      </Container>
    </Box>
  )
}
