import { createTheme } from '@material-ui/core';

import breakpoints from './breakpoints';
import overrides from './overrides';
import palette from './palette';
import props from './props';
import typography from './typography';

const theme = createTheme({
  breakpoints,
  overrides,
  palette,
  props,
  typography,
});

export default theme;
