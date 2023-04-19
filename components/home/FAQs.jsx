import { useState } from 'react'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQs() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const items = [
    {
      title: 'Does Telemedica do in-person appointments?',
      text: 'This is held for the dropdown as the answer to FAQ1.',
    },
    {
      title: 'What do I need in order to get an evaluation with Telemedica?',
      text: 'This is held for the dropdown as the answer to FAQ2.',
    },
    {
      title: 'What forms of Payment do you accept?',
      text: 'This is held for the dropdown as the answer to FAQ3.',
    },
    {
      title: 'Do you accept insurance?',
      text: 'This is held for the dropdown as the answer to FAQ4.',
    },
  ]

  return <>
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
          <Typography variant={'subtitle1'}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant={'body1'}>{text}</Typography>
        </AccordionDetails>
      </Accordion>
    )) : null}
  </>;
}
