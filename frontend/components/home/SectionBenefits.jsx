import Image from 'next/image';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ImageDrSmiling from '../../public/images/Dr_Smiling_Resized.jpeg'

export default function SectionBenefits() {
  return (
    <Box sx={{ py: { xs: 7, md: 10, }, position: 'relative', }}>
      <Box sx={{ position: 'absolute', width: { xs: '100%', md: '50%' }, left: 0, top: 0, height: '100%', overflow: 'hidden', opacity: { xs: 0.15, md: 1 } }}>
        <Image fill src={ImageDrSmiling} alt="" style={{ objectFit: 'cover' }} />
      </Box>
      <Container sx={{ position: 'relative' }}>
        <Box sx={{ ml: { md: '50%' }, pl: { md: 12 } }}>
          <Typography variant={'sectionHeading'} sx={{ mb: 5, textAlign: 'left', '&:after': { marginLeft: 0 }  }}>For Veterans.<br />By Veterans.</Typography>
          <Typography variant={'subtitle1'} component={'p'} gutterBottom>The Medical Evidence Experts!</Typography>
          <Typography variant={'body1'} gutterBottom>When you choose Telemedica, you choose providers who understand you, see you in your fight, and are experts in crafting high-quality medical evidence that wins VA claims. Our network of trusted providers understands the unique needs of the veteran community. Many of the providers in Telemedica's network have served veterans in the past, are military spouses, or are even veterans themselves. Don't leave the success of your claim to chance; get connected with a medical evidence expert today!</Typography>
        </Box>
      </Container>
    </Box>
  );
};
