import Image from 'next/image';
import { Box, Container } from '@mui/material'
import dividerImage from '../../public/images/section-divider.png';

export default function SectionDivider() {
  return (
    <Box>
      <Container sx={{ position: 'relative' }}>
        <Image src={dividerImage} alt="" fill />
      </Container>
    </Box>
  );
}
