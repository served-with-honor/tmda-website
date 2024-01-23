import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import useVARatings from '../../hooks/useVARatings';
import Spouse from './Spouse';
import Parents from './Parents';
import Children from './Children';
import Selector from './Selector';
import CircleFiller from '../CircleFiller'
import Counter from '../Counter'
import Divider from '@mui/material/Divider';

export default function DisabilityCalculator() {
  const theme = useTheme();
  const [disabilities, setDisabilities] = useState([]);
  const [dependents, setDependents] = useState({
    isMarried: false,
    spouseAid: false,
    children: 0,
    adultChildren: 0,
    parents: 0,
  });
  const { rating, payment, bilateralFactor } = useVARatings(disabilities, dependents);

  const handleDisabilityAdd = disability => setDisabilities(prev => [...prev, disability]);
  const handleDisabilityRemove = index => setDisabilities(prev => prev.toSpliced(index, 1));
  const handleMarriageChange = spouseData => setDependents(prev => ({ ...prev, ...spouseData }));
  const handleChildrenChange = ([ children, adultChildren ]) => setDependents(prev => ({ ...prev, children, adultChildren }));
  const handleParentsChange = parents => setDependents(prev => ({ ...prev, parents }));
  const handleReset = () => { setDisabilities([]); setDependents({}); }

  return <>
    <Grid container alignContent='stretch' sx={{ borderRadius: 5, overflow: 'hidden', boxShadow: 10 }}>
      <Grid item sm={12} md={6}>
        <Box sx={{ backgroundColor: 'secondary.100', p: [2,5], height: '100%', }}>
          <Typography variant='body2' sx={{ mb: [1,3] }}>What percentage is your disability rated at now, or what level would you like to achieve?</Typography>

          <Selector addNewDisability={handleDisabilityAdd} />
          
          {disabilities ? <Stack sx={{ my: 3 }} direction="row" spacing={1} useFlexGap flexWrap="wrap">
            {disabilities.map(({ label, value }, index) => (
              <Chip
                key={`disability-item-${index}`}
                label={`${label}: ${value}%`}
                color='secondary'
                onDelete={() => { handleDisabilityRemove(index) }}
              />
            ))}
          </Stack> : null}
          <Divider component="div" role="presentation">
            <Typography variant='subtitle1' component='p'>Family</Typography>
          </Divider>
          <Box sx={{ my: 1 }}><Spouse isMarried={dependents.isMarried} set={handleMarriageChange} /></Box>
          <Box sx={{ my: 1 }}><Children count={[dependents.children, dependents.adultChildren]} setCount={handleChildrenChange} /></Box>
          <Box sx={{ my: 1 }}><Parents count={dependents.parents} setCount={handleParentsChange} /></Box>
          
          { disabilities.length > 0 || dependents?.isMarried || dependents?.children > 0 || dependents?.adultChildren > 0 || dependents?.parents > 0 ? (
            <Button variant='outlined' size='small' onClick={handleReset}>Reset</Button>
          ) : null}
        </Box>
      </Grid>

      <Grid item sm={12} md={6}>
        <Box sx={{ backgroundColor: 'secondary.800', color: 'secondary.contrastText', height: '100%', textAlign: 'center', p: [3,5] }}>
          <Box sx={[
            { transition: 'all 0.25s ease-in-out' },
            !payment && !rating?.rounded ? {
              filter: 'blur(10px)',
              opacity: 0.25,
            } : null
            ]}>
            <Box sx={{ position: 'relative', height: 240, width: 240, display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 5 }}>
              <Box sx={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
              }}>
                <CircleFiller color={theme.palette.primary.main} color2={theme.palette.primary['100']} radius={110} stroke={20} percent={rating.rounded} animateOnce />
              </Box>
              <Box sx={{ position: 'relative' }}>
                <Typography variant='body2' sx={{ mb: 0, lineHeight: 1.1 }}>
                  Disability Rating
                  <Typography variant='h2' component='span' sx={{ display: 'block', mt: 0, lineHeight: 1.1 }}><Counter to={rating.rounded} digits={2} animateOnce />%</Typography>
                </Typography>
                {rating.total !== rating.rounded ? (
                  <Typography variant='caption' component='p' sx={{ mt: 1 }}>{rating.total}% Combined</Typography>
                ) : null}
                {bilateralFactor ? (
                  <Typography variant='caption' component='p'>{bilateralFactor}{ } Bilateral Factor</Typography>
                ) : null}
              </Box>
            </Box>
            <Typography variant='lead'>Your Monthly Payment From The VA</Typography>
            <Typography variant='h1' color='success.light'>$<Counter to={payment} digits={7} animateOnce /></Typography>
            <Typography variant='caption' component='p'>If approved & based on the criteria you selected</Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  </>
}
