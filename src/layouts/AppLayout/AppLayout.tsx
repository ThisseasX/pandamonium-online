import React from 'react';
import { Provider } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import Box from '@mui/material/Box';
import { store } from 'state';
import { theme } from 'theme';
import globalStyles from './globalStyles';
import styles from './styles';

type Props = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: Props) => (
  <Provider store={store}>
    <CssBaseline />
    <GlobalStyles styles={globalStyles} />

    <ThemeProvider theme={theme}>
      <Box sx={styles.root}>{children}</Box>
    </ThemeProvider>
  </Provider>
);

export default AppLayout;
