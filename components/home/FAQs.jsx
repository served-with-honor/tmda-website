import { useState } from 'react'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQs({ items = [] }) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  
  return items && items.length > 0 ? items.map(({ title, text }, index) => (
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
    )) : null;
}
