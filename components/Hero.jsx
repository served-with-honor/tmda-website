import { Box, Container } from '@mui/material'

export default function Hero({ bgvideo, children, gradient, gradientColors }) {
  const gradientStyle = gradient ? {
    background: `linear-gradient(to right, ${gradientColors[0]} 30%, ${gradientColors[1]} 90%)`
  } : {}
  return (
    <Box sx={{
      backgroundColor: gradient ? 'transparent' : '#eee',
      // clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)',
      ...gradientStyle,
      minHeight: '80vh',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}>
      {bgvideo ?
        <Box sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          opacity: '0.75',
        }}>
          <video autoPlay loop muted playsInline style={{ height: '100%', width: '100%', objectFit: 'cover' }}>
            <source src={bgvideo} type="video/mp4" />
          </video>
        </Box>
      : null}
      <Container sx={{ position: 'relative' }}>
        {children}
      </Container>
    </Box>
  )
}