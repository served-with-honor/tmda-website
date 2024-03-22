import { useState } from 'react'
import { CssBaseline, ThemeProvider } from "@mui/material";
import { baseTheme } from '../theme'
import { BookingContext } from '../context/BookingContext'
import '../styles/globals.css'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const [isBookingDialogOpen, setIsBookingDialogOpen] = useState(false);
  const [bookingService, setBookingService] = useState(null);

  const openBookingDialog = (isOpen, service = null) => {
    setIsBookingDialogOpen(isOpen);
    setBookingService(isOpen ? service : null);
  }
  
  return (
    <ThemeProvider theme={baseTheme}>
      <CssBaseline />

      <BookingContext.Provider value={{
        isOpen: isBookingDialogOpen,
        setIsOpen: openBookingDialog,
        service: bookingService,
      }}>
        <Component {...pageProps} />
      </BookingContext.Provider>
    </ThemeProvider>
  )
}