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
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { slugify } from '../src/utils';
import { format } from 'path';

export default function PriceTable({ rows }) {
  const categories = Array.from(new Set(rows.map(row => row.category))).filter(Boolean);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(rows.filter(({ category }) => category === selectedCategory));
  }, [selectedCategory]);

  return <>
    <Grid container gap={1} sx={{ justifyContent: 'center', marginBottom: 3 }}>
      {categories.map((category) => {
        const isCurrent = selectedCategory === category;
        return (
          <Grid item key={`price-table-category-${slugify(category)}-button`}>
            <Chip
              variant={isCurrent ? 'contained' : 'outlined'}
              onClick={() => setSelectedCategory(category)}
              color={isCurrent ? "secondary" : "secondary"}
              label={category}
            />
          </Grid>
        )
      })}
    </Grid>
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
              <TableCell width='100%'>Service</TableCell>
              <TableCell align='right' sx={{ whiteSpace: 'nowrap' }}>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <AnimatePresence>
              {items.map(({ label, subtext, items, amount, fee, disclaimer, category }, index) => {
                const formatAmount = amount => amount.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 });
                const price = typeof amount === 'number' ? formatAmount(amount) : Array.isArray(amount) ? amount.map(formatAmount).join(' - ') : amount;
                
                return (
                  selectedCategory === category ? <>
                    <MotionRow
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { delay: index * 0.1 } }}
                      exit={{ opacity: 0 }}
                      mode='wait'
                      key={`price-table-row-${index}`}
                      sx={{ '&:last-child td, &:last-child th': { borderBottom: 0 }, '& td': { borderBottom: items ? 0 : null} }}
                    >
                      <TableCell>
                        <Typography
                          variant='subtitle2'
                          component='span'
                          sx={{ mr: subtext ? 1 : 0 }}
                        >
                          {label}
                          {disclaimer ? (
                            <Typography component='sup' varian='body2'>{disclaimer}</Typography>
              )           : null}
                        </Typography>
                        {subtext ? (
                          <Typography
                            variant='body2'
                            component='span'
                            sx={{ display: { xs: 'block', sm: 'initial' } }}
                          >
                            ({subtext})
                          </Typography>
                        ) : null}
                      </TableCell>
                      
                      <TableCell align='right'>
                        <Typography variant='subtitle1' color='success.light'>{price}</Typography>
                      </TableCell>
                    </MotionRow>
                    {items ? (
                      <MotionRow
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { delay: index * 0.1 } }}
                        exit={{ opacity: 0 }}
                        key={`price-table-row-${index}-items`}
                        sx={{ 'td': { pt: 0 } }}
                      >
                        <TableCell colSpan={2}>
                        {items.map(({ label, amount }, index) => {
                          return <Box>
                              - {label}
                            {amount ? (
                              <Typography variant='body2' component='span' color='success.light' sx={{ ml: 1 }}>
                                {formatAmount(amount)}
                              </Typography>
                            ) : null}
                          </Box>;
                        })}
                        </TableCell>
                      </MotionRow>
                    ) : null}
                  </> : null
                );
              })}
            </AnimatePresence>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  </>
}

const MotionRow = motion(TableRow);