import { domToReact } from 'html-react-parser';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import AddIcon from '@mui/icons-material/Add';
import Link from '../Link';
import { parserStripStyles, parserFixClass } from '../utils'

export const renderElementContents = (element) => {
	const { children, name, attribs, type, data } = element;
	
	parserStripStyles(attribs);
	parserFixClass(attribs);

	if (type === 'text') return data;
	if (name === 'a') return <Link {...attribs}>{domToReact(children)}</Link>
	if (name === 'ul') return renderUnorderedList(element);
	
	if (children) return domToReact(children, { replace: renderElementContents });
	return domToReact(element);
}

export const renderUnorderedList = ({ children }) => (
	<List disablePadding>
		{domToReact(children, { replace: renderListItem })}
	</List>
);

const renderListItem = ({ type, children }) => {
	if (type !== 'tag') return;
	
	return (
		<ListItem dense disableGutters sx={{ alignItems: 'flex-start' }}>
			<ListItemIcon sx={{ minWidth: 32, mt: 0.25, }}><AddIcon sx={{ color: 'primary.main' }} /></ListItemIcon>
			<ListItemText>{domToReact(children, { replace: renderElementContents })}</ListItemText>
		</ListItem>
	);	
}