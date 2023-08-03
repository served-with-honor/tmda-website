import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function PriceTable({ rows, columns }) {
  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((label, index) => (
              <TableCell
                key={`${label}-${index}`}
                align={index === 0 ? 'left' : 'right'}
                sx={{ color: 'secondary.main', fontWeight: '700' }}
              >
                {label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map( (row, index) => (
            <TableRow
              key={`${row.name}-${index}`}
              sx= {{ '&:last-child td, &:last-child th': {borderBottom: 0} }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.bookingFee}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
