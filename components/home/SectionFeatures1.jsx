import React from 'react'
import { motion } from 'framer-motion';
import { Button, Box, Container, Grid, Typography } from '@mui/material';
import { slugify } from '../../src/utils';
import settings from '../../src/siteSettings';

export default function SectionFeatures1() {
  const title = 'How Can We Help?'
  const items = [
    { body: 'For new or returning clients', button: { label: 'Get Started', url: '#' }, },
    { body: 'Booking, pay invoices, upload documents', button: { label: 'Patient Portal', url: settings.externalLinks.patientPortal }, },
    { body: 'For current Telemedica providers', button: { label: 'Provider Portal', url: settings.externalLinks.providerPortal }, },
  ];

  return (
    <Box paddingY={12}>
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
        <Grid container={true} spacing={2}>
          {items && items.length > 0 ? items.map((item, index) => (
            <Grid
              item
              xs={4}
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
                    href={item.button.url}
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
