import { domToReact } from 'html-react-parser';
import Typography from '@mui/material/Typography'
import WPBlockHeading from './WPBlockHeading';
import WPBlockMedia from './WPBlockMedia';
import WPBlockTable from './WPBlockTable';
import WPBlockButtons from './WPBlockButtons';
import SimpleTOC from './SimpleTOC';
import WPBlockImage from './WPBlockImage';
import WPBlockSeparator from './WPBlockSeparator';
import WPBlockList from './WPBlockList';
import { renderElementContents } from './generics';

export const replaceContent = (element) => {
	const { parent, type, children, name, attribs, data } = element;
	const { class: classNames } = attribs || {};
	
	if (parent) return;
	
	// Ignore empty text nodes
	if (type === 'text' && !data.trim().length) return;

	// Exclude SimpleTOC
	if(classNames?.includes('simpletoc-list')) return <></>;
	if (classNames?.includes('simpletoc-title')) return <></>;

	if (classNames?.includes('wp-block-heading')) return WPBlockHeading(element);
	if (classNames?.includes('wp-block-buttons')) return WPBlockButtons(element);
	if (classNames?.includes('wp-block-image')) return WPBlockImage(element);
	if (classNames?.includes('wp-block-media-text')) return WPBlockMedia(element);
	if (classNames?.includes('wp-block-table')) return WPBlockTable(element);
	if (classNames?.includes('wp-block-separator')) return WPBlockSeparator(element);

	if (name === 'p') return <Typography variant='body1' my={3}>{domToReact(children, { replace: renderElementContents })}</Typography>
	if (name === 'ul') return WPBlockList(element);
	
	return element;
}

export const replaceSideContent = (element) => {
	// Only render SimpleTOC
	if (
		!element?.attribs?.class?.includes('simpletoc-list')
		&& !element?.attribs?.class?.includes('simpletoc-title')
	) return <></>;

	return SimpleTOC(element);
}
