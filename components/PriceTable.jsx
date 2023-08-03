import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function PriceTable({ rows, columns }) {
  return (
    <TableContainer sx={{ p: 2, border: 1, borderRadius: 2 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((label, index) => (
              <TableCell key={`${label}-${index}`} align={index === 0 ? 'left' : 'right'}>{label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map( (row, index) => (
            <TableRow
              key={`${row.name}-${index}`}
              sx= {{ '&:last-child td, &:last-child th': {borderBottom: 0} }}
            >
              <TableCell component="th" scope="row" sx= {{ borderBottom: 0 }}>
                {row.name}
              </TableCell>
              <TableCell sx= {{ borderBottom: 0 }} align="right">{row.bookingFee}</TableCell>
              <TableCell sx= {{ borderBottom: 0 }} align="center">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
