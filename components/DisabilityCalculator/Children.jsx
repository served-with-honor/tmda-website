import { useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Switch from '@mui/material/Switch';
import CustomNumberInput from '../CustomNumberInput';


export default function Children({ count, setCount }) {
  const [hasChildren, setHasChildren] = useState(count && (count[0] > 0 || count[1] > 0));

  const handleToggle = (a) => {
    const isChecked = a.target.checked;
    setHasChildren(isChecked);
    if (!isChecked) setCount([0,0]);
  }

  const handleChildrenChange = (event, value) => {
    setCount([value, count[1]]);
  }

  const handleAdultChildrenChange = (event, value) => {
    setCount([count[0], value]);
  }

  return (
    <Grid container>
      <Grid item>
        <FormGroup>
          <FormControlLabel label='Children' control={<Switch onChange={handleToggle} />} />
        </FormGroup>
      </Grid>
      {hasChildren ? <>
        <Grid item><CustomNumberInput aria-label="Children" placeholder="Children" value={count[0] || 0}  onChange={handleChildrenChange} /></Grid>
        <Grid item><CustomNumberInput aria-label="Adult Children" placeholder="Adult Children" value={count[1] || 0} onChange={handleAdultChildrenChange} /></Grid>
          {/* <NumberInput aria-label="Children" min={0} max={9} value={count[0]} onChange={handleChildrenChange} /> */}
          {/* <NumberInput aria-label="Adult Children" min={0} max={9} value={count[1]} onChange={handleAdultChildrenChange} /> */}
      </> : null}
    </Grid>
  )
}
