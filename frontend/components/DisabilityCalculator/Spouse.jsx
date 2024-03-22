import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function Spouse({ isMarried, set }) {
  const handleMarriageChange = (a) => {
    set({ isMarried: a.target.checked, spouseAid: false });
  };
  const handleSpouseAidChange = (a) => {
    set({ spouseAid: a.target.checked }) 
  };

  return (
    <Grid container>
      <Grid item>
        <FormGroup>
          <FormControlLabel label='Married' control={
            <Switch checked={isMarried} onChange={handleMarriageChange} />
          } />
        </FormGroup>
      </Grid>
      {isMarried ? (
        <Grid item>
          <FormGroup>
            <FormControlLabel label='Requires Aid & Attendance (A/A)' control={
              <Switch onChange={handleSpouseAidChange} />
            } />
          </FormGroup>
        </Grid>
      ) : null}
    </Grid>
  )
}
