import { useContext } from 'react';
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import BookingWidget from './BookingWidget'
import { BookingContext } from '../context/BookingContext'

export default function BookingPopup() {
  const { isOpen, setIsOpen } = useContext(BookingContext);
  
  return (
    <Dialog open={isOpen || false} onClose={() => setIsOpen(false)} fullWidth={true}>
      <Box sx={{ p: 3 }}><BookingWidget /></Box>
    </Dialog>
  );
}