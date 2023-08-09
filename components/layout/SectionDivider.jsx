import Image from 'next/image';
import { Box, Container } from '@mui/material'
import dividerImage from '../../public/crosses-divider.svg';

export default function SectionDivider() {
  return (
    <Box sx={{ py: 3 }}>
      <Container sx={{ position: 'relative', textAlign: 'center' }}>
        <Image
          src={dividerImage}
          alt=""
          style={{
            height: 'auto',
            maxWidth: 416,
          }}
        />
      </Container>
    </Box>
  );
}
