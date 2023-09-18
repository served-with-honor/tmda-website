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
    lead: {
      component: 'p',
      fontFamily: montserrat.style.fontFamily,
      fontSize: 24,
      lineHeight: 1.5,
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
      contrastText: '#000',
      100: '#eaf8f4',
      200: '#c0e9df',
      300: '#96daca',
      400: '#6cccb4',
      500: '#42bd9f',
      600: '#33937c',
      700: '#256958',
      800: '#163f35',
      900: '#071512',
    },
    secondary: {
      main: '#2F4177',
      contrastText: '#fff',
      100: '#ebeef7',
      200: '#c2cbe7',
      300: '#99a9d7',
      400: '#7186c7',
      500: '#4864b7',
      600: '#384e8e',
      700: '#283766',
      800: '#18213d',
      900: '#080b14',
    },
  }, 
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          sectionHeading: 'h2',
          lead: 'p',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#256958',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: 18,
          boxShadow: 0,
          borderRadius: 24,
        },
      }
    },
    MuiAccordion: {
      styleOverrides: {
        rounded: {
          '&:first-of-type': {
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
          },
          '&:last-of-type': {
            borderBottomLeftRadius: 24,
            borderBottomRightRadius: 24,
          },
        }
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 24,
        },
      },
    },
  }
}));

const darkTheme = createTheme({
  ...baseTheme,
  components: {
  	MuiLink: {
  		styleOverrides: {
        root: {
          color:  baseTheme.palette.primary['700'],
  				textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
          },
        },
  		},
  	},
  }
});

export {
  baseTheme,
  darkTheme,
}