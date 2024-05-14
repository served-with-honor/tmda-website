import { domToReact } from 'html-react-parser';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableFooter from '@mui/material/TableFooter';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function WPBlockTable({ children }) {
	const table = children.find(({ name }) => name === 'table');
	const tableHeader = table?.children.find(({ name }) => name === 'thead')?.children[0];
	const tableBody = table?.children.find(({ name }) => name === 'tbody');
	const tableFooter = table?.children.find(({ name }) => name === 'tfoot')?.children[0];
	const caption = children.find(({ name }) => name === 'figcaption');
	
	return (
    <TableContainer component={Paper} sx={{ my: 6 }}>
			<Table>

				{caption ? (
					<caption>{domToReact(caption.children)}</caption>
				) : null}

				{tableHeader ? (
					<TableHead>
						<TableRow>
							{domToReact(tableHeader.children, {
								replace: (element) => {
									return <TableCell colSpan={element.attribs.colspan || 1}>{domToReact(element.children)}</TableCell>
								}
							})}
						</TableRow>
					</TableHead>
				) : null}

			{tableBody ? (
				<TableBody>
					{domToReact(tableBody.children, { replace: (row) => (
						<TableRow>
							{domToReact(row.children, { replace: (cell) => (
								<TableCell colSpan={cell.attribs.colspan || 1}>{domToReact(cell.children)}</TableCell>
							)})}
						</TableRow>
					)})}
				</TableBody>
			): null}

			{tableFooter ? (
				<TableFooter>
					<TableRow>
						{domToReact(tableFooter.children, {
							replace: (element) => {
								return <TableCell>{domToReact(element.children)}</TableCell>
							}
						})}
					</TableRow>
				</TableFooter>
			) : null}

			</Table>
		</TableContainer>
	);
}