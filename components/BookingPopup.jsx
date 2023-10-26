import { useContext } from 'react';
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import BookingWidget from './BookingWidget'
import { BookingContext } from '../context/BookingContext'

export default function BookingPopup() {
  const { isOpen, setIsOpen, service } = useContext(BookingContext);
  
  return (
    <Dialog open={isOpen || false} onClose={() => setIsOpen(false)} fullWidth={true}>
        <IconButton
          aria-label="close"
          onClick={() => setIsOpen(false)}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
        <CloseIcon />
      </IconButton>
      <Box sx={{ p: 3 }}><BookingWidget service={service} /></Box>
    </Dialog>
  );
}