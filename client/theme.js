import { createMuiTheme } from '@material-ui/core/styles';
import { green, pink } from '@material-ui/core/colors';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: '#5c67a3',
      main: green[500], 
      dark: '#2e355b',
      contrastText: '#fff',
    },
    secondary: {
      light: '#87CEEB', 
      main: '#FFB6C1', 
      dark: '#002f6c',
      contrastText: '#000',
    },
    openTitle: '#3f4771',
    protectedTitle: pink['400'],
    type: 'light',
  },
});

export default theme;
