import { useState } from 'react'
import PropTypes from 'prop-types';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { slugify } from '../src/utils';

CustomTabs.propTypes = {
  name: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    heading: PropTypes.string,
    body: PropTypes.string.isRequired,
  })).isRequired,
};

export default function CustomTabs({ items, name = 'Custom Tabs' }) {
	const [activeTab, setActiveTab] = useState(0);
  const handleChange = (event, newValue) => setActiveTab(newValue);
  const parentSlug = slugify(name);

	return (
		<Paper sx={{ borderRadius: 6, position: 'relative' }}>
      <Tabs
        sx={{ px: 4, py: 2 }}
        value={activeTab}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        allowScrollButtonsMobile
        aria-label={name}
      >
        {items.map(({ title }, index) => {
          const id = `${parentSlug}-tab-${index}`;
          return (
            <Tab
              key={id}
              sx={{
                fontWeight: 700,
                textTransform: 'capitalize',
                fontSize: 20,
                lineHeight: 1,
                px: 0,
                '&:not(:first-child)': { ml: 3 },
              }}
              variant='h5'
              label={title}
              id={id}
              {...{ 'aria-controls': `${parentSlug}-panel-${index}` }}
            />
          );
        })}
			</Tabs>
      <Box sx={{
        backgroundColor: 'secondary.100',
        borderRadius: 6,
        p: 2,
        minHeight: { md: 200 },
      }}>
        {items.map(({ body }, index) => {
          const isActive = activeTab === index;
          const id = `${parentSlug}-panel-${index}`;
          return (
            <Box
              key={id}
              id={id}
              role="tabpanel"
              hidden={!isActive}
              aria-labelledby={`${parentSlug}-tab-${index}`}
            >
              {isActive && (
                <Box sx={{ p: 3, maxWidth: { md: 'calc(100% - 200px)' } }}>
                  <Typography variant='body1' sx={{ fontSize: 18 }}>{body}</Typography>
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
        <Image width={225} height={300} src="/images/serve-tabs-image.png" alt="doctor"/>
      </Box>
		</Paper>
	)
}
