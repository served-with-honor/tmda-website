import { useEffect, useState, useRef } from 'react'
import Script from 'next/script'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { useCookies } from 'react-cookie';
import siteSettings from '../src/siteSettings';
import { slugify } from '../src/utils'

export default function BookingWidget() {
  const regionsList = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
    'District of Columbia',
    'Puerto Rico',
    'Out of US',
  ];

  const [newLocation, setNewLocation] = useState('');
  const [region, setRegion] = useState(null);
  const ref = useRef(null);
  const [cookies, setCookie] = useCookies(['booking-location']);

  useEffect(() => {
    window.intakeq = siteSettings.booking.id;
    if (cookies['booking-location']) {
      setRegion(cookies['booking-location']);
      return;
    }
    
    fetch(`http://www.geoplugin.net/json.gp?`)
      .then(response => response.json())
      .then(body => {
        const {
          geoplugin_countryCode: countryCode,
          geoplugin_region: state
        } = body;
        setRegion(countryCode === 'US' ? state : 'Out of US');
        setRegion(state);
      })
      .catch(error => console.log(error));
  }, []);
  
  useEffect(() => {
    setCookie('booking-location', region);
    if (!region) return;

    const formId = siteSettings.booking.forms[region];
    if (formId) window.intakeqLocationId = formId;
    
    ref.current.replaceChildren();
    
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://intakeq.com/js/widget.min.js?1";
    document.head.appendChild(script);
    
  }, region);
  
  return (
    <Box>
      {region ? (
        <>
          {/* <Script src="https://intakeq.com/js/widget.min.js?1" strategy='lazyOnload'/> */}
          <Box sx={{ mx: '15px' }}>
            <Grid container alignItems="center" gap={1}>
              <Grid item><Typography variant='subtitle1'>{region}</Typography></Grid>
              <Grid><Button variant="text" size='small' onClick={() => setRegion(null)} sx={{ fontSize: 12 }}>Change Location</Button></Grid>
            </Grid>
          </Box>
          <div id="intakeq" ref={ref} />
        </>
      ) : (
        <>
          <Grid container spacing={1} alignItems={'center'}>
            <Grid item md>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Location</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={newLocation}
                  label="Location"
                  onChange={(event) => setNewLocation(event.target.value)}
                >
                  {regionsList.map(location => (
                    <MenuItem key={`booking-location-${slugify(location)}`} value={location}>{location}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
                <Button variant='contained' onClick={() => setRegion(newLocation)}>Update</Button>
            </Grid>
          </Grid>
        </>
      )}
    </Box>
  );
}
