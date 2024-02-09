import { domToReact } from 'html-react-parser';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'
import { getJustification, getSize, getGridDirection } from './generics';
import { parserStripStyles, parserFixClass } from '../utils';

export default function WPBlockButtons({ attribs, children }) {
	const { class: classes } = attribs || {};
	const justification = getJustification(classes);
	const direction = getGridDirection(classes);

	return (
		<Grid container gap={2} justifyContent={justification} direction={direction}>
			{domToReact(children, { replace: replaceButtons })}
		</Grid>
	);
}

const replaceButtons = ({ children, attribs }) => {
	const { class: classes } = attribs || {};
	if (!children) return;
	const variant = classes?.includes('is-style-outline') ? 'outlined' : 'contained';
	const size = getSize(classes);
	
	const button = children.find(({ name }) => name === 'a');
	parserStripStyles(button.attribs);
	parserFixClass(button.attribs);
	return (
		<Grid item>
			<Button variant={variant} color='primary' size={size} {...button.attribs}>
				{domToReact(children)}
			</Button>
		</Grid>
	);
}
