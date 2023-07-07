import { CssBaseline, ThemeProvider } from "@mui/material";
import { baseTheme } from '../theme'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={baseTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}