import { useState } from 'react'
import PropTypes from 'prop-types';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

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
		<Paper sx={{ position: 'relative' }}>
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
      <Box sx={{
        backgroundColor: 'secondary.100',
        borderRadius: 1,
        p: 2,
        minHeight: 275,
      }}>
				{items.map(({ heading, body }, index) => (
					<Box
            key={`serve-tabs-panel-${index}`}
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
          >
            {value === index && (
              <Box sx={{ p: 3, maxWidth: { md: 'calc(100% - 350px)' } }}>
                <Typography variant='h6'>{heading}</Typography>
                <Typography variant='body1'>{body}</Typography>
              </Box>
            )}
          </Box>
				))}
      </Box>
      <Box
        sx={theme => ({
          position: 'absolute',
          bottom: 0,
          right: 1,
          lineHeight: 0,
          [theme.breakpoints.down('md')]: { display: 'none' },
        })}
      >
        <Image width={300} height={400} src="/images/serve-tabs-image.png" alt="doctor"/>
      </Box>
		</Paper>
	)
}
