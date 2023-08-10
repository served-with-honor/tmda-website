import { useState } from 'react'
import PropTypes from 'prop-types';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Box from '@mui/system/Box';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';



CustomAccordion.propTypes = {
    name: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        text: PropTypes.string,
    })).isRequired
}

export default function CustomAccordion({items, name = 'Custom Accordion'}){
    const [expanded, setExpanded] = useState(false);

	const handlePanelChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

  return(
    <Box>
        {items.map(({ title, text }, index) => (
            <Accordion
                    key={`faq-panel-${index}`}
                    expanded={expanded === `panel${index}`}
                    onChange={handlePanelChange(`panel${index}`)}
                    sx={{ my: 4, py: 2}}
                    square
                >
                    <AccordionSummary
                        aria-controls={`panel${index}-content`}
                        id={`panel${index}-header`}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            '& .MuiSvgIcon-root': {
                                fontSize: 72,
                                mr: 2,
                            }
                        }}
                    >
                        <CircleOutlinedIcon />
                        <Stack direction='column'>
                            <Typography variant='h6'>{title}</Typography>
                            <Typography variant='text'>text</Typography>
                        </Stack>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant='body1'>{text}</Typography>
                    </AccordionDetails>
                </Accordion>
        ))}
    </Box>
  )

}
