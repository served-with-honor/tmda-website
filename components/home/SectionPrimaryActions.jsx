import { useContext } from 'react';
import { motion } from 'framer-motion';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { BookingContext } from '../../context/BookingContext'
import siteSettings from '../../src/siteSettings';

export default function SectionPrimaryActions() {
  const { setIsOpen } = useContext(BookingContext);
  const items = [
    {
      text: 'For new or returning clients',
      button: { text: 'Get Started', action: () => setIsOpen(true) },
    },
    {
      text: 'Booking, pay invoices, upload documents',
      button: { text: 'Patient Portal', url: siteSettings.externalLinks.patientPortal, target: '_blank' },
    },
    {
      text: 'For current Telemedica providers',
      button: { text: 'Provider Portal', url: siteSettings.externalLinks.providerPortal, target: '_blank' },
    },
  ];

  return (
    <Box sx={{ backgroundColor: 'grey.50', py: { xs: 7, md: 10 }, }}>
      <Container sx={{ position: 'relative' }}>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
        >
          <Typography
            variant={'sectionHeading'}
            component={'h2'}
            marginBottom={10}
          >
            How Can We Help?
          </Typography>
        </motion.div>
        
        {items && items.length > 0 ? (
          <Grid container={true} spacing={{ xs: 10, md: 5 }}>
            {items.map((item, index) => (
              <Column key={`section-primary-actions-item-${index}`} {...item} {...index} />
            ))}
          </Grid>
        ) : null}

      </Container>
    </Box>
  );
}

const Column = ({ text, button, index }) => {
  return (
    <Grid item xs={12} md={4}>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
      >
        <Typography variant={'body1'} align={'center'} marginBottom={3}>
          <Button
            size={'large'}
            variant={'contained'}
            href={button.url || null}
            target={button.target || 'self'}
            onClick={button.action || null}
          >
            {button.text}
          </Button>
        </Typography>
        <Typography variant={'h6'} align={'center'} component={'p'}>
          {text}
        </Typography>
      </motion.div>
    </Grid>
  );
}
