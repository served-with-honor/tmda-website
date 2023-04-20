import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { Oswald, Montserrat } from 'next/font/google'

const oswald = Oswald({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'] })

const baseTheme = responsiveFontSizes(createTheme({
  typography: {
    fontFamily: montserrat.style.fontFamily,
    h1: {
      fontFamily: oswald.style.fontFamily,
      fontWeight: 700,
    },
    h2: {
      fontFamily: oswald.style.fontFamily,
      fontWeight: 700,
    },
    h3: {
      fontFamily: oswald.style.fontFamily,
      fontWeight: 700,
    },
    h4: {
      fontFamily: oswald.style.fontFamily,
      fontWeight: 700,
    },
    h5: {
      fontFamily: oswald.style.fontFamily,
      fontWeight: 700,
    },
    h6: {
      fontFamily: oswald.style.fontFamily,
      fontWeight: 700,
    },
    subtitle1: {
      fontWeight: 700,
    },
    subtitle2: {
      fontWeight: 700,
    },
    sectionHeading: {
      fontFamily: oswald.style.fontFamily,
      fontSize: 48,
      lineHeight: 1,
      textAlign: 'center',
      '&::after': {
        backgroundColor: 'hsl(165, 48%, 62%)',
        content: '""',
        display: 'block',
        height: 2,
        position: 'relative',
        margin: '1rem auto',
        maxWidth: '100%',
        width: '7.5rem',
      }
    },
  },
  palette: {
    primary: {
      main: 'hsl(165, 48%, 62%)',
      contrastText: '#fff',
    },
    secondary: {
      main: '#2F4177',
      contrastText: '#fff',
    },
  },
  shape: {
    borderRadius: 24,
  }, 
  components: {
    // MuiCard: {
    //   styleOverrides: {
    //     root: {
    //       borderRadius: 30,
    //     }
    //   }
    // },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: 18,
          color: ({ theme }) => theme.palette.primary.contrastText,
          boxShadow: 0,
        }
      }
    }
  }
}));

const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    ...baseTheme.palette,
    mode: 'dark',
  },
  // components: {
  // 	MuiLink: {
  // 		styleOverrides: {
  // 			root: {
  // 				textDecoration: 'none',
  // 			},
  // 		},
  // 	},
  // }
});

export {
  baseTheme,
  darkTheme,
}