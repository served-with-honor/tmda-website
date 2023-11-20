import { domToReact } from 'html-react-parser';
import Typography from '@mui/material/Typography'
import { renderUnorderedList } from './generics';

export default function SimpleTOC(element) {
	const { name, attribs, children } = element;
	const { class: classes } = attribs || {};
	
	if (classes?.includes('simpletoc-title'))
		return (
			<Typography
				variant='h6'
				component='h2'
				color='secondary.main'
				gutterBottom
			>
				{domToReact(children)}
			</Typography>
		);
	
	if (classes?.includes('simpletoc-list')) return renderUnorderedList(element);
}
