import { domToReact } from 'html-react-parser';
import Typography from '@mui/material/Typography';
import Link from '../Link';
import { parserStripStyles, parserFixClass } from '../utils'

export const renderElementContents = (element) => {
	const { children, name, attribs, type, data } = element;
	
	parserStripStyles(attribs);
	parserFixClass(attribs);

	if (type === 'text') return data;
	if (name === 'a') return <Link {...attribs}>{domToReact(children)}</Link>
	if (name === 'p') return <Typography variant='body1' gutterBottom>{domToReact(children, { replace: renderElementContents })}</Typography>
	
	return domToReact(element);
}

export const getJustification = (classes) => {
	if (!classes) return '';
	if (classes.includes('is-content-justification-center')) return 'center';
	if (classes.includes('is-content-justification-right')) return 'flex-end';
	if (classes.includes('is-content-justification-left')) return 'flex-start';
	if (classes.includes('is-content-justification-space-between')) return 'space-between';
	return '';
}

export const getTextAlignment = (classes) => {
	if (!classes) return '';
	if (classes.includes('has-text-align-right')) return 'right';
	if (classes.includes('has-text-align-center')) return 'center';
	if (classes.includes('has-text-align-left')) return 'left';
	return '';
}

export const getSize = (classes) => {
	if (!classes) return '';
	if (classes.includes('has-x-large-font-size')) return 'large';
	if (classes.includes('has-large-font-size')) return 'large';
	if (classes.includes('has-medium-font-size')) return 'medium';
	if (classes.includes('has-small-font-size')) return 'small';
	return '';
}

export const getGridDirection = (classes) => classes?.includes('is-vertical') ? 'column' : 'row';

export const getButtonStyle = (classes) => classes?.includes('is-style-outline') ? 'outlined' : 'contained';

export const getGridVerticalAlignment = (classes) => {
	if (!classes) return;
	if (classes.includes('is-vertically-aligned-center')) return 'center';
	if(classes.includes('is-vertically-aligned-bottom')) return 'flex-end';
	if(classes.includes('is-vertically-aligned-top')) return 'flex-start';
	
	return;
}

export const isEmptyText = ({ type, data }) => (
	type === 'text' && (
		!data.trim().length || data.match(/^(\\n)+$/)
	)
);
