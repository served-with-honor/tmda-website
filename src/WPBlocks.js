import { domToReact } from 'html-react-parser';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography'
import AddIcon from '@mui/icons-material/Add';
import Link from './Link';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'
import { parserStripStyles, parserFixClass } from './utils'

const getJustification = (classNames) => {
	if (classNames.includes('is-content-justification-center')) return 'center';
	if (classNames.includes('is-content-justification-right')) return 'flex-end';
	if (classNames.includes('is-content-justification-left')) return 'flex-start';
	if (classNames.includes('is-content-justification-space-between')) return 'space-between';
	return '';
}

const getSize = (classNames) => {
	if (!classNames) return '';
	if (classNames.includes('has-x-large-font-size')) return 'large';
	if (classNames.includes('has-large-font-size')) return 'large';
	if (classNames.includes('has-medium-font-size')) return 'medium';
	if (classNames.includes('has-small-font-size')) return 'small';
	return '';
}

const renderElementContents = (element) => {
	const { children, name, attribs, type } = element;
	
	parserStripStyles(attribs);
	parserFixClass(attribs);

	if (type === 'text') return element.data;
	if (name === 'a') return <Link {...attribs}>{domToReact(children)}</Link>
	
	return domToReact(children, { replace: renderElementContents });
}

const renderUnorderedList = (element) => (
	<List disablePadding>
		{domToReact(element.children, { replace: renderListItem })}
	</List>
);
const renderListItem = (element) => {
	if (element.type !== 'tag') return;
	
	return (
		<ListItem dense>
			<ListItemIcon sx={{ minWidth: 0, mr: 2 }}><AddIcon sx={{ color: 'primary.main' }} /></ListItemIcon>
			<ListItemText>{domToReact(element.children, { replace: renderElementContents })}</ListItemText>
		</ListItem>
	);	
}

export const replaceContent = (element) => {

	if (element.name === 'p') return <Typography variant='body1' my={3}>{domToReact(element.children, { replace: renderElementContents })}</Typography>
	if (element.name === 'h1') return <Typography variant='h4' component='h2' color='secondary.main' my={6}>{domToReact(element.children)}</Typography>
	if (element.name === 'h2') return <Typography variant='h4' component='h2' color='secondary.main' my={6}>{domToReact(element.children)}</Typography>
	if (element.name === 'h3') return <Typography variant='h5' component='h3' color='secondary.main' my={5}>{domToReact(element.children)}</Typography>
	if (element.name === 'h4') return <Typography variant='h6' component='h4' color='secondary.main' my={4}>{domToReact(element.children)}</Typography>
	if (element.name === 'h5') return <Typography variant='h6' component='h5' color='secondary.main' my={3}>{domToReact(element.children)}</Typography>
	if (element.name === 'h6') return <Typography variant='h6' component='h6' color='secondary.main' my={2}>{domToReact(element.children)}</Typography>
	if (element.name === 'ul') return renderUnorderedList(element);
	if (element.name === 'hr') return <Divider />;

	if (element?.attribs?.class?.includes('wp-block-buttons')) return WPButtons(element);
	
	return element;
}


const replaceButtons = (element) => {
	if (!element.children) return;
	const variant = element?.attribs?.class?.includes('is-style-outline') ? 'outlined' : 'contained';
	const size = getSize(element?.attribs?.class);
	
	const button = element.children.find(a => a.name === 'a');
	parserStripStyles(button.attribs);
	parserFixClass(button.attribs);
		
	return (
		<Grid item>
			<Button variant={variant} color='primary' size={size} {...button.attribs}>
				{domToReact(button.children)}
			</Button>
		</Grid>
	);
}

export const WPButtons = buttons => {
	const justification = getJustification(buttons?.attribs?.class);
	const direction = buttons?.attribs?.class?.includes('is-vertical') ? 'column' : 'row';

	return (
		<Grid container gap={2} justifyContent={justification} direction={direction}>
			{domToReact(buttons.children, { replace: replaceButtons })}
		</Grid>
	);
}