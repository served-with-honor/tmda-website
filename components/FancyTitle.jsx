import Box from '@mui/material/Box'
import { splitTitle } from '../src/utils';

export default function FancyTitle({ title, styles }) {
  const { primaryText, preText, postText } = splitTitle(title);
  
  return <>
    {preText && (
      <Box component='span' sx={styles}>
        {preText}
      </Box>
    )}
    {primaryText}
    {postText && (
      <Box component='span' sx={styles}>
        {postText}
      </Box>
    )}
  </>
	}