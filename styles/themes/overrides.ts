import { ThemeOptions } from '@material-ui/core';
import colors from './colors';

const overrides: ThemeOptions['overrides'] = {
  MuiButton: {
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
  MuiGrid: {
    container: {
      width: 'auto',
    },
  },
};

export default overrides;
