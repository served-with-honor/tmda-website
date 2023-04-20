import Image from 'next/image';
import { Box, Container } from '@mui/material'
import dividerImage from '../../public/images/section-divider.png';

export default function SectionDivider() {
  return (
    <Box>
      <Container>
        <Image src={dividerImage} alt="" layout = "responsive" width={1200} height={300} />
      </Container>
    </Box>
  );
}
