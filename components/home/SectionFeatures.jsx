import { motion } from 'framer-motion'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { slugify } from '../../src/utils';

export default function SectionFeatures() {
  const items = [
    {
      heading: 'DBQs and Nexus Letters',
      text: 'Evidence to support your VA claim. Nexus Letters (IMOs) and DBQs do not require an appointment. Simply book, upload your documents, and one of our licensed professionals will be in touch to let you know if a medical document is warranted.',
    },
    {
      heading: 'Mental & Medical Evaluations',
      text: 'Receive a mental health or medical evaluation from one of our trusted, licensed providers. We conduct evaluations of 21 physical conditions, and can help you identify mental health condition(s) you may be living with.',
    },
    {
      heading: 'Rebuttal Letters',
      text: 'Rebuttal Letters help to address incorrect or inaccurate statements contained within VA denial letters. Available for mental health and medical denials. These letters are exclusively available to clients who have received a denial letter for a claim for which we have previously provided support.',
    },
  ];
  
  return (
    <Box paddingY={12} align={'center'} backgroundColor='grey.50'>
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Typography variant={'sectionHeading'} component={'h2'} sx={{ mb: 8 }}>What We Do</Typography>
        </motion.div>
        
        <Grid container spacing={5}>
          {items.map(({ heading, text }, index) => (
            <Grid item sm={4} key={`section-what-we-do-item-${slugify(heading)}`} sx={{ mb: 3 }}>
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: (index * 0.1) + 0.5 }}
              >
                <Avatar sx={{ bgcolor: 'secondary.main', height: 50, width: 50, mb: 3 }}>{index + 1}</Avatar>
                <Typography variant={'h4'} component={'h3'} sx={{ mb: 3, minHeight: { sm: '3.705em', md: '2.47em' } }}>{heading}</Typography>
                <Typography variant={'body1'}>{text}</Typography>
              </motion.div>
            </Grid>

          ))}
        </Grid>
        <Button variant={'contained'} href={'/services'} sx={{ mt: 8 }}>Our Services</Button>
      </Container>
    </Box>
  )
}