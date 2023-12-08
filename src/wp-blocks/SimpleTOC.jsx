import { domToReact } from 'html-react-parser';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import Link from '../Link';
import { isEmptyText } from './generics';

export default function SimpleTOC(element, current) {
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
			'li': { my: 2, },
			'a': {
				display: 'block',
				textDecoration: 'none',
				':hover': { textDecoration: 'underline' },
				// ':focus': { 
				// 	color: 'primary.main',
				// 	fontWeight: 'bold',
				// 	textDecoration: 'underline' 
				// },
			},
		}}>
			<ol>
				{domToReact(children, { replace: (element) => renderListItem(element, current) })}
			</ol>
		</Box>
	);

	return domToReact(element);
}

const renderListItem = (element, current) => {
	if(isEmptyText(element)) return;
	
	return <li>
		{domToReact(element.children, { replace: (element) => renderContent(element, current) })}
	</li>;
}

const renderContent = (element, current) => {
	const { name, children, attribs } = element;
	
	if (isEmptyText(element)) return;
	
	if (name === 'ul') return (
		<ol>{domToReact(children, { replace: (element) => renderListItem(element, current) })}</ol>
	);

	if (name === 'a' && children) return <Link {...attribs} sx={{color: current === attribs.href ? 'red' : null }}>
		{current}{domToReact(children)}</Link>
	
	return domToReact(element);
}

