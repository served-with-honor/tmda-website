import { useEffect, useState, useRef, useContext } from 'react'
import router from 'next/router';
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
import { slugify } from '../src/utils';
import constants from '../src/constants';
import { getUSRegion } from '../lib/geolocation';
import { BookingContext } from '../context/BookingContext'

export default function BookingWidget({ service = null }) {
  const { setIsOpen } = useContext(BookingContext);

  const regionsList = [...constants.usRegions, 'Out of US'];

  const [newLocation, setNewLocation] = useState('');
  const [region, setRegion] = useState(null);
  const ref = useRef(null);
  const [cookies, setCookie] = useCookies(['booking-location']);

  const handleAppointmentBooked = ({ detail }) => {
    // Send event to Google Analytics
    window.dataLayer.push({
      'event': 'appointment_booked',
      "userEmail": detail.ClientEmail,
      "serviceName": detail.ServiceName,
      "amountPaid": detail.TotalAmountPaid,
      "appointmentConfirmed": detail.Status === 2,
    });

    if(setIsOpen) setIsOpen(false);
    
    // Redirect to confirmation page
    router.push(`/service-booked-confirmed?service=${detail.ServiceName}&name=${detail.ClientName}`);
  };

  useEffect(() => {
    window.intakeq = siteSettings.booking.id;
    if (cookies['booking-location']) {
      setRegion(cookies['booking-location']);
    } else {
      getUSRegion()
        .then(region => { setRegion(region || 'Out of US'); })
        .catch((error) => {
          setRegion(null);
          console.error('Problem fetching geolocation', error);
        })
      ;
    }

    // Listen for appointment booked event - https://support.intakeq.com/article/243-booking-widget-javascript-events
    window.addEventListener('intakeqAppointmentBooked', handleAppointmentBooked);
    
    // Remove event listener on cleanup
    return () => {
      window.removeEventListener('intakeqAppointmentBooked', handleAppointmentBooked);
    }
  }, []);
  
  useEffect(() => {
    if (!region) return;
    setCookie('booking-location', region);

    const formId = siteSettings.booking.locations[region];
    if (formId) {
      window.intakeqLocationId = formId;
    } else {
      delete window.intakeqLocationId;
    }
    
    const serviceId = siteSettings.booking.services[service];
    if (serviceId) {
      window.intakeqServiceId = serviceId;
    } else {
      delete window.intakeqServiceId;
    }
    
    ref.current.replaceChildren();
    
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.defer = true;
    script.src = constants.intakeq.widgetUrl;
    document.head.appendChild(script);
    
  }, [region, service]);
  
  return (
    <Box>
      {region ? (
        <>
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
          <Typography variant='h5' component='p' textAlign='center' sx={{ mb: 3 }}>Choose your location</Typography>
          <Grid container spacing={1} alignItems={'center'}>
            <Grid item xs>
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
