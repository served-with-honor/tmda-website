import { useState } from 'react'
import { CssBaseline, ThemeProvider } from "@mui/material";
import { baseTheme } from '../theme'
import { BookingContext } from '../context/BookingContext'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const [isBookingDialogOpen, setIsBookingDialogOpen] = useState(false);

  return (
    <ThemeProvider theme={baseTheme}>
      <CssBaseline />

      <BookingContext.Provider value={{ isOpen: isBookingDialogOpen, setIsOpen: setIsBookingDialogOpen }}>
        <Component {...pageProps} />
      </BookingContext.Provider>
    </ThemeProvider>
  )
}