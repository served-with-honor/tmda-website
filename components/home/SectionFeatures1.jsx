import { useContext } from 'react'
import { motion } from 'framer-motion';
import { Button, Box, Container, Grid, Typography } from '@mui/material';
import { slugify } from '../../src/utils';
import settings from '../../src/siteSettings';
import { BookingContext } from '../../context/BookingContext'

export default function SectionFeatures1() {
  const { setIsOpen } = useContext(BookingContext);
  const title = 'How Can We Help?'
  const items = [
    { body: 'For new or returning clients', button: { label: 'Get Started', action: () => setIsOpen(true) }, },
    { body: 'Booking, pay invoices, upload documents', button: { label: 'Patient Portal', url: settings.externalLinks.patientPortal, target: '_blank' }, },
    { body: 'For current Telemedica providers', button: { label: 'Provider Portal', url: settings.externalLinks.providerPortal, target: '_blank' }, },
  ];

  return (
    <Box paddingY={12} sx={{ backgroundColor: 'grey.50'}}>
      <Container sx={{ position: 'relative' }}>
        {title ? (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            <Typography
              variant={'sectionHeading'}
              component={'h2'}
              marginBottom={10}
            >
              {title}
            </Typography>
          </motion.div>
        ) : null}
        <Grid container={true} spacing={{ xs: 10, md: 5 }}>
          {items && items.length > 0 ? items.map((item, index) => (
            <Grid
              item
              xs={12}
              md={4}
              key={`section-${slugify(title)}-item-${slugify(item.body)}`}
            >
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
              >
                <Typography variant={'body1'} align={'center'} marginBottom={3}>
                  <Button
                    size={'large'}
                    variant={'contained'}
                    href={item.button.url || null}
                    target={item.button.target || 'self'}
                    onClick={item.button.action || null}
                  >
                    {item.button.label}
                  </Button>
                </Typography>
                <Typography variant={'h6'} align={'center'} component={'p'}>
                  {item.body}
                </Typography>
              </motion.div>
            </Grid>
          )) : null}
        </Grid>
      </Container>
    </Box>
  );
}
