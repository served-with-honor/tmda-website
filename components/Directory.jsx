import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { motion } from 'framer-motion'
import PersonCard from '../components/PersonCard'
import { slugify } from '../src/utils';

export default function Directory({ items }) {
  const [value, setValue] = useState(0);
  
  const handleChange = (event, newValue) => setValue(newValue);

  return <>
    <DirectoryNav items={items.map(({ label }) => label)} value={value} handleChange={handleChange} />

    {items ? items.map(({ people }, index) => (
      <TabPanel key={`directory-panel-${index}`} value={value} index={index}>
        {people ? (
          <Grid container rowSpacing={{ xs: 1, sm: 2, md: 5 }} columnSpacing={{ sm: 2, md: 5 }} >
            {people.map((person, index) => {
              return (
                <Grid key={`directory-person-${slugify(person.name)}`} item xs={12} sm={6} md={3} lg={2}>
                  <motion.div
                    align="center"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * index }}
                  >
                    <PersonCard {...person} />
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
      <Box sx={{ py: 3 }}>
        {children}
      </Box>
    )}
  </div>
);

