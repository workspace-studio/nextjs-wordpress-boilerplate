import { ThemeOptions } from '@material-ui/core';

const props: ThemeOptions['props'] = {
  MuiButtonBase: {
    disableRipple: true,
  },
  MuiButton: {
    variant: 'contained',
    color: 'primary',
  },
  MuiTypography: {
    color: 'textPrimary',
  },
  MuiLink: {
    underline: 'none',
  },
};

export default props;
