import { domToReact } from 'html-react-parser';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import Link from '../Link';
import { isEmptyText } from './generics';

export default function SimpleTOC(element) {
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
				':focus': { 
					color: 'primary.main',
					fontWeight: 'bold',
					textDecoration: 'underline' 
				},
			},
		}}>
			<ol>
				{domToReact(children, { replace: renderListItem })}
			</ol>
		</Box>
	);

	return domToReact(element);
}

const renderListItem = (element) => {
	if(isEmptyText(element)) return;
	
	return <li>
		{domToReact(element.children, { replace: renderContent })}
	</li>;
}

const renderContent = (element) => {
	const { name, children, attribs } = element;
	
	if (isEmptyText(element)) return;
	
	if (name === 'ul') return (
		<ol>{domToReact(children, { replace: renderListItem })}</ol>
	);

	if (name === 'a' && children) return <Link {...attribs}>{domToReact(children)}</Link>
	
	return domToReact(element);
}

