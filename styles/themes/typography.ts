import { ThemeOptions } from '@mui/material';

const typography: ThemeOptions['typography'] = {
  fontFamily:
    '-apple-system, blinkmacsystemfont, segoe ui, roboto, oxygen, ubuntu, cantarell, fira sans, droid sans, helvetica neue, sans-serif',
  h1: {
    fontSize: '80px',
    lineHeight: '80px',
    fontWeight: 'bold',
    letterSpacing: '-3px',
  },
  h2: {
    fontSize: '64px',
    lineHeight: '64px',
    fontWeight: 'bold',
    letterSpacing: '-3px',
  },
  body1: {
    fontSize: '20px',
    lineHeight: '24px',
    letterSpacing: 0,
  },
  body2: {
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: 0,
  },
  overline: {
    fontSize: '12px',
    lineHeight: '24px',
    letterSpacing: '0.75px',
  },
  caption: {
    fontSize: '10px',
    lineHeight: '14px',
    letterSpacing: '1px',
  },
  button: {
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: 0,
    fontWeight: 'bold',
  },
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
};

export default typography;
