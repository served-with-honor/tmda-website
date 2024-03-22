import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function Parent({ count, setCount }) {
  return (
    <Grid container>
      <Grid item>
        <FormGroup>
          <FormControlLabel
            control={<Switch checked={count > 0} />}
            label='Parent Dependents'
            onChange={(a) => setCount(a.target.checked ? 1 : 0)}
          />
        </FormGroup>
      </Grid>
      {count > 0 ? (
        <Grid item>
          <ToggleButtonGroup
            color='primary'
            size='small'
            value={count}
            exclusive
            onChange={(a) => { setCount(parseInt(a.target.value)) }}
            aria-label='Dependent parents'
          >
            <ToggleButton value={1} aria-label='1 parent' sx={{ width: 32 }}>1</ToggleButton>
            <ToggleButton value={2} aria-label='2 parents' sx={{ width: 32 }}>2</ToggleButton>
          </ToggleButtonGroup>
        </Grid>
      ) : null}
    </Grid>
  )
};
