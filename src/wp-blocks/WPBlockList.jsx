import { domToReact } from 'html-react-parser';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import AddIcon from '@mui/icons-material/Add';
import { renderElementContents } from './generics';

export default function WPBlockList(element) {
	return (
		<List disablePadding>
			{domToReact(element.children, { replace: renderListItem })}
		</List>
	);
}

const renderListItem = ({ type, children }) => {
	if (type !== 'tag') return;
	
	return (
		<ListItem dense disableGutters sx={{ alignItems: 'flex-start' }}>
			<ListItemIcon sx={{ minWidth: 32, mt: 0.25, }}><AddIcon sx={{ color: 'primary.main' }} /></ListItemIcon>
			<ListItemText>{domToReact(children, { replace: renderElementContents })}</ListItemText>
		</ListItem>
	);	
}