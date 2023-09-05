import parse, { domToReact } from 'html-react-parser';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'


const getJustification = (classNames) => {
	if (classNames.includes('is-content-justification-center')) return 'center';
	if (classNames.includes('is-content-justification-right')) return 'flex-end';
	if (classNames.includes('is-content-justification-space-between')) return 'space-between';
	return 'flex-start';
}

const getSize = (classNames) => {
	if (classNames.includes('has-x-large-font-size')) return 'large';
	if (classNames.includes('has-large-font-size')) return 'large';
	if (classNames.includes('has-medium-font-size')) return 'medium';
	if (classNames.includes('has-small-font-size')) return 'small';
}

export const WPButtons = element => {
	
	const justification = getJustification(element?.attribs?.class);
	const direction = element?.attribs?.class?.includes('is-vertical') ? 'column' : 'row';

	return (
		<Grid container gap={2} justifyContent={justification} direction={direction}>
			{element.children.filter(a => a.type === 'tag').map(item => {
				console.log(item);
				const variant = item?.attribs?.class?.includes('is-style-outline') ? 'outlined' : 'contained';
				const size = getSize(item?.attribs?.class);
				return (
					<Grid item>
						<Button variant={variant} color='primary' size={size} {...item.children[0].attribs}>
							{domToReact(item.children[0].children)}
						</Button>
					</Grid>
				);
			})}
		</Grid>
	);
}