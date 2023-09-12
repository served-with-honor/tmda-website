import { useState } from 'react'
import PropTypes from 'prop-types';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Image from 'next/image';
import { slugify } from '../src/utils';

CustomAccordion.propTypes = {
    name: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        icon: PropTypes.object,
    })).isRequired
}

export default function CustomAccordion({items, name = 'Custom Accordion'}){
    const [isExpanded, setIsExpanded] = useState(false);

	const handlePanelChange = (index) => (event, isExpanded) => {
		setIsExpanded(isExpanded ? index : false);
    };
    
  const parentSlug = slugify(name);

  return(
    <Box>
        {items.map(({ title, icon, body }, index) => {
            const panelSlug = `${parentSlug}-${index}`;
            return (
                <Accordion
                    key={panelSlug}
                    expanded={isExpanded === index}
                    onChange={handlePanelChange(index)}
                    sx={{ my: 2, py: 1}}
                    square
                >
                    <AccordionSummary
                        aria-controls={`${panelSlug}-content`}
                        id={`${panelSlug}-header`}
                    >
                    <Grid container spacing={2} alignItems={'center'}>
                            {icon ? <Grid item><Image src={icon} alt={icon.alt || ''} /></Grid> : null}
                            <Grid item xs sx={{textAlign: {xs: 'center', sm: 'left'}}}>
                                <Typography variant='h6' component={'p'}>{title}</Typography>
                            </Grid>
                            <Grid item>
                                {!isExpanded ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
                            </Grid>
                        </Grid>
                    </AccordionSummary>
                    <AccordionDetails>
                        {body}
                    </AccordionDetails>
                </Accordion>
            );
        })}
    </Box>
  )

}
