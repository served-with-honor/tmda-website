import { useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import siteSettings from '../../src/siteSettings';
import { formatPhoneNumber } from '../../src/utils';

export default function SectionFAQs() {
  const [expanded, setExpanded] = useState(false);

  const items = [
    {
      title: 'Will my appointment be in person or online?',
      text: 'Telemedica provides telehealth services that allows veterans to access their medical evidence anytime, anywhere.Mental Health and Telemedicine Evaluations will be conducted online via video call.The link is sent a few minutes before the appointment.Nexus Letter services do not require an appointment.',
    },
    {
      title: 'Do you take insurance or offer payment plans?',
      text: 'Telemedica does not accept insurance or offer payment plants at this time.',
    },
    {
      title: 'How long will it take for me to receive my documents?',
      text: 'Our average turnaround time is 7-10 business days.Turnaround time for Nexus Letter rush services is two(2) business days(please note that rush services are an extra $100 per document).',
    },
    {
      title: 'Can I book over the phone?',
      text: `You may book through our booking link - ${siteSettings.externalLinks.booking} or by phone at ${formatPhoneNumber(siteSettings.contact.phone)}, but if you encounter any issues, feel free to reach out to customer service for assistance.`,
    }
  ];

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{
      background: 'linear-gradient(135deg, #e2f5f1 0%, #d5d9e4 100%)',
      py: { xs: 7, md: 10, },
    }}>
      <Container maxWidth='md'>
        <Typography variant='sectionHeading' component='h2' sx={{ mb: 8 }}>Frequently Asked Questions</Typography>

        {items && items.length > 0 ? items.map(({ title, text }, index) => (
          <Accordion
            key={`faq-panel-${index}`}
            disableGutters
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography variant={'subtitle1'} component='p'>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant={'body1'}>{text}</Typography>
            </AccordionDetails>
          </Accordion>
        )) : null}
        
        <Box align='center' sx={{ mt: 8 }}>
          <Button color='primary' variant='contained' href='/faqs'>View All FAQs</Button>
        </Box>

      </Container>
    </Box>
  )
}
