import { useState } from 'react'
import PropTypes from 'prop-types';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Stack from '@mui/material/Stack';
import Hidden from '@mui/material/Hidden';


CustomTabs.propTypes = {
  items: PropTypes.arrayOf({
    title: PropTypes.string,
    heading: PropTypes.string,
    body: PropTypes.string,
  }),
};

export default function CustomTabs({ items }) {
	const [value, setValue] = useState(0);
	const handleChange = (event, newValue) => setValue(newValue);

	return (
		<Paper>
      <Tabs
        sx={{ px: 4, py: 2 }}
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        allowScrollButtonsMobile aria-label="basic tabs example"
      >
        {items.map(({ title }, index) => (
          <Tab
            key={`serve-tabs-tab-${index}`}
            sx={{ fontWeight: 'bold' }}
            label={title}
            id={`simple-tab-${index}`}
            ariaControls={`simple-tabpanel-${index}`}
          />
        ))}
			</Tabs>
			<Box sx={{ backgroundColor: 'secondary.100', borderRadius: 1 }}>
				{items.map(({ heading, body }, index) => (
					<CustomTabPanel
						key={`serve-tabs-panel-${index}`}
						value={value}
						index={index}
						children={heading}
						children2={body}
          >
            <Typography variant='h6' sx={{px: 4, mt: 3,  }}>{heading}</Typography>
					  <Typography variant='body1' sx={{ mt: 3, mb: 1, px: 4,  }}>{body}</Typography>
          </CustomTabPanel>
				))}
			</Box>
		</Paper>
	)
}

CustomTabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function CustomTabPanel(props) {
	const { children, value, index, ...other } = props;
	return (
	  <Grid
      container
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
	  >
		{value === index && (
		  <Box sx={{ p: 3 }}>
        <Stack direction={'row'}>
          <Grid item md={8}>{children}</Grid>
          <Hidden mdDown>
            <Grid item md>
              <Image 
                width={300} 
                height={400} 
                src="/images/serve-tabs-image.png" 
                alt="doctor" 
                style={{position: 'absolute', marginTop: '-200px'}}
              />
            </Grid>
          </Hidden>
        </Stack>
		  </Box>
		)}
	  </Grid>
	);
}
