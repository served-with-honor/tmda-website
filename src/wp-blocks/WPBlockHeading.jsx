import Typography from '@mui/material/Typography'
import { renderElementContents } from './generics';

export default function WPBlockHeading({ name, children, attribs }) {
	const { id } = attribs || {};
	const component = name === 'h1' ? 'h2' : name;
	const sizeNum = parseInt(name.replace('h', ''));
	const variant = `h${sizeNum + 2 > 6 ? 6 : sizeNum + 2}`;
	return <Typography
		variant={variant}
		component={component}
		color='secondary.main'
		my={6}
		id={id}
	>
		{renderElementContents(children)}
	</Typography>;
}