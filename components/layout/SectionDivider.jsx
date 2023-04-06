import Image from 'next/image';
import { Container } from '@mui/material'
import styled from 'styled-components';
import dividerImage from '../../public/images/section-divider.png';

const Wrapper = styled.div`
  img {
    max-width: 100%;
    min-width: 37.5rem;
    height: auto;
  }
`


export default function SectionDivider() {
  return (
    <Wrapper>
      <Container>
        <Image src={dividerImage} alt="" />
      </Container>
    </Wrapper>
  );
}
