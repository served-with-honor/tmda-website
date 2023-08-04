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
              key={`${row[0]}-${index}`}
              sx= {{ '&:last-child td, &:last-child th': {borderBottom: 0} }}
            >
              {row.map((cell, index) => (
                <TableCell
                  key={`${cell}-${index}`}
                  component={index === 0 ? 'th' : ''}
                  scope={index === 0 ? 'row' : ''}
                  align={index > 0 ? 'right' : ''}
                >
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
