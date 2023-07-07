import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { motion } from 'framer-motion'
import { slugify } from '../src/utils';
import imageUrlBuilder from "@sanity/image-url"
import defaultProfile from '../public/default-profile.png'
import sanityClient from '../lib/sanityConfig'
const builder = imageUrlBuilder(sanityClient);

export default function Directory({ items }) {
  const [value, setValue] = useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return <>
    <DirectoryNav items={items.map(({ label }) => label)} value={value} handleChange={handleChange} />

    {items ? items.map(({ people }, index) => (
      <TabPanel key={`directory-panel-${index}`} value={value} index={index}>
        {people ? (
          <Grid container spacing={5} sx={{ justifyContent: 'center' }}>
            {people.map(({ name, position, image }, index) => {
              return (
                <Grid key={`directory-team-member-${slugify(name)}`} item sm={4} md={3} lg={2}>
                  <motion.Box
                    align="center"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * index }}
                  >
                    <Person name={name} image={image} position={position} />
                  </motion.Box>
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

const Person = ({ name, position, image }) => {
  const imageUrl = image ? builder.image(image).size(300, 300).url() : defaultProfile.src;
  return <>
    <Avatar src={imageUrl} alt={`${name} profile photo`} sx={{ width: 150, height: 150, marginBottom: 3 }} />
    <Typography variant='h6' component='p'>{name}</Typography>
    <Typography variant='body2'>{position}</Typography>
  </>
};