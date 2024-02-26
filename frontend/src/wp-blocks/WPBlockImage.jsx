import { domToReact } from 'html-react-parser';
import Box from '@mui/material/Box';

export default function WPBlockImage({ children }) {
	return (
		<Box sx={{ my: 3 }}>
			{domToReact(children, { replace: renderImage })}
		</Box>
	);
}

const renderImage = ({ attribs }) => {
	return (
		<img
			src={attribs.src}
			srcSet={attribs.srcset}
			sizes={attribs.sizes}
			alt={attribs.alt}
			width={attribs.width}
			height={attribs.height}
			style={{ height: 'auto', maxWidth: '100%', }}
		/>
	);
};
