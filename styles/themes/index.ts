import { createMuiTheme } from '@material-ui/core';

import breakpoints from './breakpoints';
import overrides from './overrides';
import palette from './palette';
import props from './props';
import typography from './typography';

const theme = createMuiTheme({
  breakpoints,
  overrides,
  palette,
  props,
  typography,
});

export default theme;
