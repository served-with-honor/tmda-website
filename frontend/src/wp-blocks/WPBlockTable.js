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
	const table = children.find(({ name }) => name === 'table');
	const tableHeader = table?.children.find(({ name }) => name === 'thead');
	const tableBody = table?.children.find(({ name }) => name === 'tbody');
	const tableFooter = table?.children.find(({ name }) => name === 'tfoot');
	const caption = children.find(({ name }) => name === 'figcaption');
	
	return (
    <TableContainer component={Paper} sx={{ my: 6 }}>
			<Table>

				{caption ? (
					<caption>{domToReact(caption.children)}</caption>
				) : null}

				{tableHeader ? (
					<TableHead>
						{domToReact(tableHeader.children, { replace: replaceRow })}
					</TableHead>
				) : null}

				{tableBody ? (
					<TableBody>
						{domToReact(tableBody.children, { replace: replaceRow })}
					</TableBody>
				): null}

				{tableFooter ? (
					<TableFooter>
						{domToReact(tableFooter.children, { replace: replaceRow })}
					</TableFooter>
				) : null}

			</Table>
		</TableContainer>
	);
}

const replaceRow = (row) => {
	return (
		<TableRow>
			{domToReact(row.children, { replace: replaceCell })}
		</TableRow>
	);
}

const replaceCell = (cell) => {
	const align = getTextAlignment(cell.attribs.class || '');
	const colspan = cell.attribs.colspan || 1;

	return (
		<TableCell align={align} colSpan={colspan}>
			{domToReact(cell.children)}
		</TableCell>
	)
}