import { ThemeOptions } from '@mui/material';
import Colors from './colors';

const palette: ThemeOptions['palette'] = {
  primary: {
    main: Colors.primary,
    contrastText: Colors.white,
  },
  secondary: {
    main: Colors.secondary,
    contrastText: Colors.white,
  },
};

export default palette;
