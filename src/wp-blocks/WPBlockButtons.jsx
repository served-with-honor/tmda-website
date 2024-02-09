import { domToReact } from 'html-react-parser';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'
import { getJustification, getSize, getGridDirection, getButtonStyle } from './generics';
import { parserStripStyles } from '../utils';

export default function WPBlockButtons({ attribs, children }) {
	const { class: classes } = attribs || {};
	const justification = getJustification(classes);
	const direction = getGridDirection(classes);
	
	return (
		<Grid container gap={2} justifyContent={justification} direction={direction}>
			{domToReact(children, { replace: WPButtonWrapper })}
		</Grid>
	);
}

const WPButtonWrapper = ({ children, attribs }) => {
	if (!children) return;

	children.forEach((child) => {
		child.attribs.class = `${child.attribs.class} ${attribs.class}`;
	});
	
	return (
		<Grid item>
			{domToReact(children, { replace: WPButton })}
		</Grid>
	);
}

const WPButton = ({ attribs, children }) => {
	const { class: classes, href, target, rel } = attribs;
	parserStripStyles(attribs);
	
	return (
		<Button
			color='primary'
			variant={getButtonStyle(classes)}
			size={getSize(classes)}
			href={href}
			target={target}
			rel={rel}
		>
			{domToReact(children)}
		</Button>
	);
}
