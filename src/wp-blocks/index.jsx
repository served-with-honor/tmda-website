import { domToReact } from 'html-react-parser';
import Typography from '@mui/material/Typography'
import WPBlockHeading from './WPBlockHeading';
import WPBlockMedia from './WPBlockMedia';
import WPBlockTable from './WPBlockTable';
import WPBlockButtons from './WPBlockButtons';
import WPBlockImage from './WPBlockImage';
import WPBlockSeparator from './WPBlockSeparator';
import WPBlockList from './WPBlockList';
import { renderElementContents, isEmptyText } from './generics';

export default function WPBlocks(element) {
	const { children, name, attribs } = element;
	const { class: classNames } = attribs || {};
	
	// Ignore empty text nodes
	if(isEmptyText(element)) return;
	
	if (classNames?.includes('wp-block-heading')) return WPBlockHeading(element);
	if (classNames?.includes('wp-block-buttons')) return WPBlockButtons(element);
	if (classNames?.includes('wp-block-image')) return WPBlockImage(element);
	if (classNames?.includes('wp-block-media-text')) return WPBlockMedia(element);
	if (classNames?.includes('wp-block-table')) return WPBlockTable(element);
	if (classNames?.includes('wp-block-separator')) return WPBlockSeparator(element);

	// These blocks do not have any class names
	if (name === 'p') return <Typography variant='body1' my={3}>{domToReact(children, { replace: renderElementContents })}</Typography>
	if (name === 'ul') return WPBlockList(element);
	
	return element;
}
