import { domToReact } from 'html-react-parser';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import Link from '../Link';
import { isEmptyText } from './generics';

export default function SimpleTOC(element, currentSection) {
	const { attribs, children } = element;
	const { class: classes } = attribs || {};
	
	const isHeading = classes?.includes('simpletoc-title');
	const isList = classes?.includes('simpletoc-list');
	
	if (isEmptyText(element)) return;

	if (isHeading) return (
		<Typography
			variant='h6'
			component='h2'
			color='secondary.main'
			gutterBottom
		>
			{domToReact(children)}
		</Typography>
	);
	
	if (isList) return (
		<Box sx={{
			lineHeight: 1.1,
			fontSize: 'body2.fontSize',
			'ol': { pl: 2, },
			'a': {
				display: 'block',
				textDecoration: 'none',
				':hover': { textDecoration: 'underline' },
			},
		}}>
			<ol>
				{domToReact(children, { replace: (element) => renderListItem(element, currentSection) })}
			</ol>
		</Box>
	);

	return domToReact(element);
}

const renderListItem = (element, currentSection) => {
	if(isEmptyText(element)) return;
	
	return <li>
		{domToReact(element.children, { replace: (element) => renderContent(element, currentSection) })}
	</li>;
}

const renderContent = (element, currentSection) => {
	const { name, children, attribs } = element;
	
	if (isEmptyText(element)) return;
	
	if (name === 'ul') return (
		<ol>{domToReact(children, {replace: (element) => renderListItem(element, currentSection)})}</ol>
	);

	if (name === 'a' && children) {
		const highlightedSection = currentSection === attribs.href;
		return( 
			<Link 
				id={`${attribs.href}`} 
				{...attribs}
				sx={[
					{
						padding: 1,
					},
					highlightedSection && {
						fontWeight: 'bold',
						backgroundColor: 'primary.200',
						borderRadius: 1,
					}
				]}
			>
				{domToReact(children)}
			</Link>)}
	
	return domToReact(element);
}

