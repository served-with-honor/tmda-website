import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles';
import TextFlipper from '../TextFlipper'

export default function Hero() {
	const theme = useTheme();

  return (
    <Box sx={{
      backgroundColor: '#eee',
      minHeight: '80vh',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}>
      <Box sx={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        opacity: '0.75',
      }}>
        <video autoPlay loop muted playsInline style={{ height: '100%', width: '100%', objectFit: 'cover' }}>
          <source src='/videos/hero-reel-01.mp4' type="video/mp4" />
        </video>
      </Box>
      
      <Container sx={{ position: 'relative' }}>
        <Typography variant={'h1'} color={'secondary'} fontSize={30} sx={{ textTransform: 'uppercase' }}>
					Serving Those Who Served
				</Typography>
				<Typography variant={'body1'} fontSize={30} sx={{ fontStyle: 'italic', maxWidth: 600 }}>
					The #1 Health Resource For Veterans On Their Path To
					<Box component='span' sx={{ ml: 1, display: { xs: 'block', sm: 'inline' } }}>
						<TextFlipper items={['Life Change.', 'Vitality.', 'Wellbeing.', 'Health.', 'Happiness.', 'Community.',]} lineColor={theme.palette.primary.main} />
					</Box>
				</Typography>
      </Container>
    </Box>
  )
}