import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
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
        {items[value].label === 'Providers' ? (
          <ProviderContent people={people} />
        ) : 
          <Content people={people} />
        }
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

const Content = ({ people }) => (
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
  </Grid >
);

const ProviderContent = ({ people }) => {
  const selectedCategoryPeople = ({ category }) => category.includes(selectedCategory);

  const categories = Array.from(new Set(people.map(({ category }) => category.replace(/Team Lead|Team/, '').trim())));
  const [selectedCategory, setSelectedCategory] = useState(categories[0] || []);
  const [filteredPeople, setFilteredPeople] = useState(people);
  
  useEffect(() => {
    setFilteredPeople(people.filter(selectedCategoryPeople));
  }, [selectedCategory]);

  return <>
    {categories?.length > 0 ? (
      <Box sx={{ textAlign: 'center', mb: 5 }}>
        <ButtonGroup variant="outlined" size='small' aria-label="Provider Categories">
          {categories.map((category) => (
            <Button
              key={`provider-category-${slugify(category)}`}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? 'contained' : 'outlined'}
              color='secondary'
              sx={{ fontSize: 12 }}
            >
              {category}
            </Button>
          ))}
        </ButtonGroup>
      </Box>
    ) : null}
    {filteredPeople?.length > 0 ? (
      <Content people={filteredPeople} />
    ) : null}
  </>;
}