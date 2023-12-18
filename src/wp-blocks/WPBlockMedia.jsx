import { domToReact } from 'html-react-parser';
import Box from '@mui/material/Box';
import { replaceContent, getGridVerticalAlignment } from './generics';

export default function WPBlockMedia({ attribs, children }) {
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
