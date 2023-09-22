import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { motion } from 'framer-motion'
import { slugify } from '../src/utils';
import defaultProfile from '../public/default-profile.png'
import Chip from '@mui/material/Chip';
import { blue, green, red } from '@mui/material/colors'

export default function Directory({ items }) {
  const [value, setValue] = useState(0);
  
  const handleChange = (event, newValue) => setValue(newValue);

  return <>
    <DirectoryNav items={items.map(({ label }) => label)} value={value} handleChange={handleChange} />

    {items ? items.map(({ people }, index) => (
      <TabPanel key={`directory-panel-${index}`} value={value} index={index}>
        {people ? (
          <Grid container spacing={5} sx={{ justifyContent: 'center' }}>
            {people.map(({ name, position, image, category }, index) => {
              return (
                <Grid key={`directory-team-member-${slugify(name)}`} item xs={12} sm={6} md={3} lg={2}>
                  <motion.div
                    align="center"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * index }}
                  >
                    <Person name={name} image={image} position={position} category={category}/>
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>
        ) : null}
      </TabPanel>
    )) : null}
  </>
}

const DirectoryNav = ({ items, handleChange, value }) => (
  <Tabs
    value={value}
    onChange={handleChange}
    aria-label="Team Members"
    centered
    sx={{ margin: 5 }}
  >
    {items.map((label, index) => (
      <Tab
        key={`directory-tab-${index}`}
        label={label}
        id={`directory-tab-${index}`}
        aria-controls={`directory-panel-${index}`}
      />
    ))}
  </Tabs>
);

const TabPanel = ({ children, value, index, ...other }) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
    {...other}
  >
    {value === index && (
      <Box sx={{ p: 3 }}>
        {children}
      </Box>
    )}
  </div>
);

const Person = ({ name, position, image, category }) => {
  const imageUrl = image && Array.isArray(image) ? image[0] : image ? image : defaultProfile.src;
  const srcset = image && Array.isArray(image) && image.length > 0 ? image.join(', ') : null;
  function checkColor(c) {
    if (c === 'Psych'){
      return blue[300]
    } else if (c === 'Nexus') {
      return red[400]
    } else if (c === 'Telemedicine Eval'){
      return green[400]
    }
  }
  return <>
    <Avatar srcSet={srcset} src={imageUrl} alt={`${name} profile photo`} sx={{ width: 150, height: 150, marginBottom: 3, mx: 'auto' }} />
    <Typography variant='h6' component='p'>{name}</Typography>
    <Typography variant='body2'>{position}</Typography>
    {category && category.map(c => {
      return(
        <Chip key={`${name}-${c}`}label={c} sx={c && {color: '#fff', backgroundColor: checkColor(c)}}/>
      )
    })}
  </>
};