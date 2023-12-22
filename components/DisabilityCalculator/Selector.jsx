import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AddIcon from '@mui/icons-material/Add';

export default function Selector({ addNewDisability }) {
  const disabilitiesList = ['Right Arm', 'Left Arm', 'Right Leg', 'Left Leg', 'Right Foot', 'Left Foot', 'Back', 'SSD', 'PTSD', 'Tinnitus', 'Migraines', 'Sleep Apnea', 'Other', ];
  
  const [newDisability, setNewDisability] = useState(null);

  const handleSelectionChange = (a) => {
    setNewDisability(prev => ({ label: a.target.value, value: prev?.value || 0 }))
  }

  const handlePercentageChange = (a) => {
    const value = parseInt(a?.target?.value || 0);
    setNewDisability(prev => ({ ...prev, value }));
  }

  const handleAdd = () => {
    addNewDisability(newDisability);
    setNewDisability({})
  }

  return (
    <Grid container alignItems='center' gap={3}>
      <Grid item xs>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>Disability</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={newDisability?.label || ''}
            label='Disability'
            onChange={handleSelectionChange}
          >
            <MenuItem disabled value=''>None</MenuItem>
            {disabilitiesList.map(d => <MenuItem key={d} value={d}>{d}</MenuItem>)}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs>
        <Typography variant='caption'>Percentage</Typography>
        <Slider
          aria-label='Disability Percentage'
          value={newDisability?.value || 0}
          // getAriaValueText={'asdf'}
          valueLabelDisplay={newDisability?.value ? 'on' : 'auto'}
          label='Disability Percentage'
          step={10}
          min={0}
          max={100}
          marks
          disabled={!newDisability?.label}
          onChange={handlePercentageChange}
        />
      </Grid>
      <Grid item>
        <Button
          variant='contained'
          size='small'
          endIcon={<AddIcon />}
          disabled={!newDisability?.label}
          onClick={handleAdd}>Add</Button>
      </Grid>
    </Grid>
  );
};
