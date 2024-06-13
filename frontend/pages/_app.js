import { useState } from 'react'
import { CssBaseline, ThemeProvider } from "@mui/material";
import { baseTheme } from '../theme'
import { BookingContext } from '../context/BookingContext'
import '../styles/globals.css'
import constants from '../src/constants'
import { GoogleTagManager } from '@next/third-parties/google'

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
      <GoogleTagManager gtmId={constants.google.measurementId} />
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