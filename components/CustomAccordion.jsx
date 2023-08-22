import { useState } from 'react'
import PropTypes from 'prop-types';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Box from '@mui/system/Box';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Image from 'next/image';




CustomAccordion.propTypes = {
    name: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        icon: PropTypes.string,
        // body: PropTypes.string,
    })).isRequired
}

export default function CustomAccordion({items, name = 'Custom Accordion'}){
    const [isExpanded, setIsExpanded] = useState(false);

	const handlePanelChange = (panel) => (event, isExpanded) => {
		setIsExpanded(isExpanded ? panel : false);
	};

  return(
    <Box>
        {items.map(({ title, icon, body }, index) => (
            <Accordion
                    key={`faq-panel-${index}`}
                    expanded={isExpanded === `panel${index}`}
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
                                // fontSize: 72,
                                // mr: 2,
                            }
                        }}
                    >
                    <Grid container spacing={2} alignItems={'center'}>
                            <Grid item>
                                <Image 
                                    src={icon}
                                    width={40}
                                    height={40}
                                    alt={title}
                                />
                            </Grid>
                            <Grid item xs sx={{textAlign: {xs: 'center', sm: 'left'}}}>
                                <Typography variant='h6'>{title}</Typography>
                            </Grid>
                         
                                <Grid item sx={{fontSize: '8px'}}>
                                    {!isExpanded ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
                                </Grid>
                            
                        </Grid>
                    </AccordionSummary>
                    <AccordionDetails>
                        {body}
                    </AccordionDetails>
                </Accordion>
        ))}
    </Box>
  )

}
