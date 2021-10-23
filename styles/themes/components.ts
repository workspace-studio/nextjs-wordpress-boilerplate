import { ThemeOptions } from '@mui/material';
import colors from './colors';

const components: ThemeOptions['components'] = {
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
    },
  },
  MuiButton: {
    defaultProps: {
      variant: 'contained',
      color: 'primary',
    },
    styleOverrides: {
      root: {
        borderRadius: 4,
        '&:hover': {
          opacity: 0.75,
        },
      },
      outlined: {
        background: colors.primary,
      },
    },
  },
  MuiTypography: {
    defaultProps: {
      color: 'textPrimary',
    },
  },
  MuiLink: {
    defaultProps: {
      underline: 'none',
    },
  },
  MuiGrid: {
    styleOverrides: {
      container: {
        width: 'auto',
      },
    },
  },
};

export default components;
