import styled, { css } from 'styled-components';
import { Container } from '@mui/material';

const Wrapper = styled.div`
  background-color: #eee;
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
  min-height: 60vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const VideoWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.75;
  
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export default function Hero({ bgvideo, children }) {
  return (
    <Wrapper>
      {bgvideo ?
        <VideoWrapper>
          <video autoPlay loop muted playsInline>
            <source src={bgvideo} type="video/mp4" />
          </video>
        </VideoWrapper>
      : null}
      <Container>
        {children}
      </Container>
    </Wrapper>
  );
}