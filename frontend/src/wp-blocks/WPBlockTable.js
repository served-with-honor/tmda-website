import { domToReact } from 'html-react-parser';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableFooter from '@mui/material/TableFooter';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getTextAlignment } from './generics';

export default function WPBlockTable({ children }) {
	// This is because the table is wrapped in a figure tag
	const table = children.find(({ name }) => name === 'table');

	return (
    <TableContainer component={Paper} sx={{ my: 6 }}>
			<Table>
				{domToReact(table.children, {
					replace: (element) => {
						const { name, children } = element;
						
						if (name === 'thead') 
							return <TableHead>{domToReact(children, { replace: replaceRow })}</TableHead>
						
						if (name === 'tbody') 
							return <TableBody>{domToReact(children, { replace: replaceRow })}</TableBody>
						
						if (name === 'tfoot') 
							return <TableFooter>{domToReact(children, { replace: replaceRow })}</TableFooter>
						
						return element;
					}
				})}
			</Table>
		</TableContainer>
	);
}

const replaceRow = ({ children }) => {
	return (
		<TableRow>
			{domToReact(children, { replace: replaceCell })}
		</TableRow>
	);
}

const replaceCell = ({ attribs, children }) => {
	const align = getTextAlignment(attribs.class);
	const colspan = attribs.colspan || 1;

	return (
		<TableCell align={align} colSpan={colspan}>
			{domToReact(children)}
		</TableCell>
	)
}