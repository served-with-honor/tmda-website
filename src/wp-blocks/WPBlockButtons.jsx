import { domToReact } from 'html-react-parser';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'

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

const getJustification = (classes) => {
	if (classes.includes('is-content-justification-center')) return 'center';
	if (classes.includes('is-content-justification-right')) return 'flex-end';
	if (classes.includes('is-content-justification-left')) return 'flex-start';
	if (classes.includes('is-content-justification-space-between')) return 'space-between';
	return '';
}

const getSize = (classes) => {
	if (!classes) return '';
	if (classes.includes('has-x-large-font-size')) return 'large';
	if (classes.includes('has-large-font-size')) return 'large';
	if (classes.includes('has-medium-font-size')) return 'medium';
	if (classes.includes('has-small-font-size')) return 'small';
	return '';
}

const getGridDirection = (classes) => classes?.includes('is-vertical') ? 'column' : 'row';
