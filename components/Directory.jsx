import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
// import imageUrlBuilder from "@sanity/image-url"
// import Image from 'next/image'
import defaultProfile from '../public/default-profile.png'
// const builder = imageUrlBuilder(client);

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function Directory({ items }) {
  const [value, setValue] = useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return <>
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="basic tabs example"
      centered
      sx={{ margin: 5 }}
    >
      {items.map(({ label }, index) => (
        <Tab label={label} {...a11yProps(index)} />
      ))}
    </Tabs>
    {items ? items.map(({ people }, index) => (
      <TabPanel value={value} index={index}>
        {people ? (
          <Grid container spacing={5} sx={{ justifyContent: 'center' }}>
            {people.map(({ name, position, image }, index) => {
              const imageUrl = image ? builder.image(image).size(500, 500).url() : defaultProfile.src;
              console.log(imageUrl);
              return <Grid item sm={4} md={3} lg={2} key={`team-member-${index}`}>
                <Box align='center'>
                  <Avatar src={imageUrl} alt={`${name} profile photo`} sx={{ width: 150, height: 150, marginBottom: 3 }} />
                  <Typography variant='h6' component='p'>{name}</Typography>
                  <Typography variant='body2'>{position}</Typography>
                </Box>
              </Grid>
            })}
          </Grid>
        ) : null}
      </TabPanel>
    )) : null}
  </>
}