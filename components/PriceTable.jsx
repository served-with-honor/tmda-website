import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { AnimatePresence, motion } from 'framer-motion';
import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Stack from '@mui/material/Stack';
import { slugify } from '../src/utils';

export default function PriceTable({ rows }) {
  const categories = Array.from(new Set(rows.map(row => row.category))).filter(Boolean);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(rows.filter(({ category }) => category === selectedCategory));
  }, [selectedCategory]);

  return <>
    <Stack direction='row' justifyContent={'center'} gap={1} sx={{ marginBottom: 3 }}>
      {categories.map((category) => {
        const isCurrent = selectedCategory === category;
        return (
          <Chip
            key={`price-table-category-${slugify(category)}-button`}
            variant={isCurrent ? 'contained' : 'outlined'}
            onClick={() => setSelectedCategory(category)}
            color={isCurrent ? "secondary" : "secondary"}
            label={category}
          />
        )
      })}
    </Stack>
    <Box sx={{
      border: 1,
      borderColor: 'primary.main',
      borderRadius: [6,12],
      p: [0,2],
    }}>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow sx={{ 'th': { color: 'secondary.main', fontWeight: '700' } }}>
              <TableCell width={'100%'}>Service</TableCell>
              <TableCell align='right'>Fee</TableCell>
              <TableCell align='right'>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <AnimatePresence>
              {items.map(({ label, fee, price, category}, index) => (
                selectedCategory === category && (
                  <MotionRow
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: index * 0.1 } }}
                    exit={{ opacity: 0 }}
                    mode='wait'
                    key={`price-table-row-${index}`}
                    sx= {{ '&:last-child td, &:last-child th': {borderBottom: 0} }}
                  >
                    <TableCell sx={{ fontWeight: '600' }}>{label}</TableCell>
                    <TableCell align='right'>{fee}</TableCell>
                    <TableCell align='right'>{price}</TableCell>
                  </MotionRow>
                )
              ))}
            </AnimatePresence>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  </>
}

const MotionRow = motion(TableRow);