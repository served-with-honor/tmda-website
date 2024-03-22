import { useState, useEffect } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import Switch from '@mui/material/Switch';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function Children({ count, setCount }) {
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    setIsToggled(count && (count[0] > 0 || count[1] > 0));
  }, [count]);

  const handleToggle = (a) => {
    const isChecked = a.target.checked;
    setIsToggled(isChecked);
    if (!isChecked) setCount([0,0]);
  }

  const handleChildrenChange = (event) => {
    const value = event.target.value;
    setCount([value, count[1]]);
  }
  
  const handleAdultChildrenChange = (event) => {
    const value = event.target.value;
    setCount([count[0], value]);
  }

  return (
    <Grid container spacing={1}>
      <Grid item>
        <FormGroup>
          <FormControlLabel label='Children' control={<Switch checked={isToggled} onChange={handleToggle} />} />
        </FormGroup>
      </Grid>
      {isToggled ? <>
        <Grid item xs container spacing={1}>
          <Grid item xs>
            <FormControl fullWidth>
              <InputLabel id='children-input-label'>Children</InputLabel>
              <Select
                labelId='children-input-label'
                id='children-input'
                value={count[0] || 0}
                onChange={handleChildrenChange}
                label='Children'
                size='small'
              >
                {[...Array(10).keys()].map(i => (
                  <MenuItem key={i} value={i} selected={i === count[0]}>{i}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs>
            <FormControl fullWidth>
              <InputLabel id='adult-children-input-label'>Adult Children</InputLabel>
              <Select
                labelId='adult-children-input-label'
                id='adult-children-input'
                value={count[1] || 0}
                onChange={handleAdultChildrenChange}
                label='Adult Children'
                size='small'
              >
                {[...Array(10).keys()].map(i => (
                  <MenuItem key={i} value={i} selected={i === count[0]}>{i}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </> : null}
    </Grid>
  )
}
