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
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableFooter from '@mui/material/TableFooter';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { parserStripStyles, parserFixClass } from './utils'

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

const getGridVerticalAlignment = (classes) => {
	if (classes.includes('is-vertically-aligned-center')) return 'center';
	if(classes.includes('is-vertically-aligned-bottom')) return 'flex-end';
	if(classes.includes('is-vertically-aligned-top')) return 'flex-start';
	
	return;
}

const renderElementContents = (element) => {
	const { children, name, attribs, type, data } = element;
	
	parserStripStyles(attribs);
	parserFixClass(attribs);

	if (type === 'text') return data;
	if (name === 'a') return <Link {...attribs}>{domToReact(children)}</Link>
	
	if (children) return domToReact(children, { replace: renderElementContents });
	return domToReact(element);
}

const renderUnorderedList = ({ children }) => (
	<List disablePadding>
		{domToReact(children, { replace: renderListItem })}
	</List>
);
const renderListItem = ({ type, children }) => {
	if (type !== 'tag') return;
	
	return (
		<ListItem dense sx={{ alignItems: 'flex-start' }}>
			<ListItemIcon sx={{ minWidth: 0, mr: 2, mt: 0.25, }}><AddIcon sx={{ color: 'primary.main' }} /></ListItemIcon>
			<ListItemText>{domToReact(children, { replace: renderElementContents })}</ListItemText>
		</ListItem>
	);	
}

const renderImage = ({ attribs, children }) => {
	return (
		<img
			src={attribs.src}
			srcset={attribs.srcset}
			sizes={attribs.sizes}
			alt={attribs.alt}
			width={attribs.width}
			height={attribs.height}
			style={{ height: 'auto', maxWidth: '100%', }}
		/>
	);
};

export const replaceContent = (element) => {
	const { children, name, attribs } = element;
	const { class: classes } = attribs || {};

	if (name === 'p') return <Typography variant='body1' my={3}>{domToReact(children, { replace: renderElementContents })}</Typography>
	if (classes?.includes('wp-block-heading')) return WPHeading(element);
	if (name === 'ul') return renderUnorderedList(element);
	if (name === 'img') return renderImage(element);
	if (name === 'hr') return <Divider sx={{ my: 6 }} />;

	if (classes?.includes('wp-block-buttons')) return WPButtons(element);
	if (classes?.includes('wp-block-image')) return WPImage(element);
	if (classes?.includes('wp-block-media-text')) return WPMedia(element);
	if (classes?.includes('wp-block-table')) return WPTable(element);
	
	return element;
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

export const WPButtons = ({ attribs, children }) => {
	const { class: classes } = attribs || {};
	const justification = getJustification(classes);
	const direction = getGridDirection(classes);

	return (
		<Grid container gap={2} justifyContent={justification} direction={direction}>
			{domToReact(children, { replace: replaceButtons })}
		</Grid>
	);
}

export const WPTable = ({ children }) => {
	const table = children.find(({ name }) => name === 'table');
	const tableHeader = table?.children.find(({ name }) => name === 'thead')?.children[0];
	const tableBody = table?.children.find(({ name }) => name === 'tbody');
	const tableFooter = table?.children.find(({ name }) => name === 'tfoot')?.children[0];
	const caption = children.find(({ name }) => name === 'figcaption');
	
	return (
    <TableContainer component={Paper} sx={{ my: 6 }}>
			<Table>

				{caption ? (
					<caption>{domToReact(caption.children)}</caption>
				) : null}

				{tableHeader ? (
					<TableHead>
						<TableRow>
							{domToReact(tableHeader.children, {
								replace: (element) => {
									return <TableCell>{domToReact(element.children)}</TableCell>
								}
							})}
						</TableRow>
					</TableHead>
				) : null}

			{tableBody ? (
				<TableBody>
					{domToReact(tableBody.children, { replace: (row) => (
						<TableRow>
							{domToReact(row.children, { replace: (cell) => (
								<TableCell>{domToReact(cell.children)}</TableCell>
							)})}
						</TableRow>
					)})}
				</TableBody>
			): null}

			{tableFooter ? (
				<TableFooter>
					<TableRow>
						{domToReact(tableFooter.children, {
							replace: (element) => {
								return <TableCell>{domToReact(element.children)}</TableCell>
							}
						})}
					</TableRow>
				</TableFooter>
			) : null}

			</Table>
		</TableContainer>
	);
}

export const WPImage = ({ children }) => {
	return (
		<Box sx={{ my: 3 }}>
			{domToReact(children, { replace: replaceContent })}
		</Box>
	);
}

export const WPMedia = ({ attribs, children }) => {
	const { class: classes, style } = attribs || {};
	
	// The styles come through as something like this: `grid-template-columns:15% auto`
	// But we only need the value so we split it on the colon and take the second item
	const cols = (style?.split(':')[1] || '').trim();
	const align = getGridVerticalAlignment(classes);
	
	return (
		<Box
			display="grid"
			gap={3}
			gridTemplateColumns={cols}
			alignItems={align}
			sx={{
				my: 3,
				'img': { maxWidth: '100%', height: 'auto' },
			}}
		>
			{domToReact(children, {
				replace: (element) => (
					<Box sx={{
						'> *:first-child': { mt: 0 },
						'> *:last-child': { mb: 0 },
					}}>
						{domToReact(element.children, { replace: replaceContent })}
					</Box>
				)})}
		</Box>
	);
}