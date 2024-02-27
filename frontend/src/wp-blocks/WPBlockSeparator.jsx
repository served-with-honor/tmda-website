import Divider from '@mui/material/Divider';

export default function WPBlockSeparator({ attribs }) {
	const maxWidth = attribs?.class?.includes('is-style-wide') ? 620 : 'min(10.5rem, 13vw)';
	return <Divider sx={{ my: 6, mx: 'auto', maxWidth }} />
}
