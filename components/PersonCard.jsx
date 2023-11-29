import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import defaultProfile from '../public/default-profile.png'
import Chip from '@mui/material/Chip';
import { blue, green, red } from '@mui/material/colors'

function getCategoryColor(categoryName) {
  switch (categoryName) {
    case 'Psych': return blue[300];
    case 'Nexus': return red[400];
    case 'Telemedicine': return green[400];
    default: return;
  }
}

export default function PersonCard({ name, position, image, isTeamLead, category }) {
  const imageUrl = image && Array.isArray(image) ? image[0] : image ? image : defaultProfile.src;
  const srcset = image && Array.isArray(image) && image.length > 0 ? image.join(', ') : null;
  
  return <>
    <Grid container spacing={{ xs: 2, md: 1 }} alignItems={'center'}>
      <Grid item md={12}>
        <Avatar srcSet={srcset} src={imageUrl} alt={`${name} profile photo`} sx={{ width: {xs: 72, md: 150}, height: {xs: 72, md: 150}, marginBottom: 1, mx: 'auto' }} />        
      </Grid>
      <Grid item xs md={12} sx={{ textAlign: { xs: 'left', md: 'center' } }}>
        <Box sx={[
          position ? {
            display: ['flex', 'flex', 'initial'],
            flexWrap: 'wrap',
            columnGap: 1,
          } : null
        ]}>
          <Typography variant='h6' component='p' gutterBottom sx={{ lineHeight: 1 }}>{name}</Typography>
          {position ? <Typography variant='body2'>{position}</Typography> : null}
        </Box>
        {category ? (
          <Chip
            label={category}
            size='small'
            variant={isTeamLead ? 'contained' : 'outlined'}
            sx={[
              { color: isTeamLead ? '#fff' : getCategoryColor(category) },
              isTeamLead
                ? { backgroundColor: getCategoryColor(category) }
                : { borderColor: getCategoryColor(category) },
            ]}
          />
        ) : null}
      </Grid>
    </Grid>
  </>
};