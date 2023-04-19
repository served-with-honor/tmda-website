import { useTheme, Box, Container, Grid } from '@mui/material'

// const VideoWrapper = styled.div`  
//   video {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
// `

export default function Hero({ bgvideo, children }) {
  return (
    <Box sx={{
      backgroundColor: '#eee',
      clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)',
      minHeight: '60vh',
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
          <video autoPlay loop muted playsInline>
            <source src={bgvideo} type="video/mp4" />
          </video>
        </Box>
      : null}
      <Container>
        {children}
      </Container>
    </Box>
  )
}