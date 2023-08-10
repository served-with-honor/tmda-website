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
    title: PropTypes.string.isRequired,
    heading: PropTypes.string,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default function CustomTabs({ items }) {
	const [activeTab, setActiveTab] = useState(0);
	const handleChange = (event, newValue) => setActiveTab(newValue);

	return (
		<Paper sx={{ position: 'relative' }}>
      <Tabs
        sx={{ px: 4, py: 2 }}
        value={activeTab}
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
        {items.map(({ heading, body }, index) => {
          const isActive = activeTab === index;
          return (
            <Box
              key={`serve-tabs-panel-${index}`}
              role="tabpanel"
              hidden={!isActive}
              id={`simple-tabpanel-${index}`}
              aria-labelledby={`simple-tab-${index}`}
            >
              {isActive && (
                <Box sx={{ p: 3, maxWidth: { md: 'calc(100% - 350px)' } }}>
                  {heading && <Typography variant='h6'>{heading}</Typography>}
                  <Typography variant='body1'>{body}</Typography>
                </Box>
              )}
            </Box>
          );
        })}
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
