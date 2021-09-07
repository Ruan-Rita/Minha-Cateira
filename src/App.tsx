import React from 'react';
import GlobalStyles from './styles/GlobalStyles'; 
import { ThemeProvider } from "styled-components"
import dark from './styles/theme/dark';
import light from './styles/theme/light';
import Routes from './routers';

const App: React.FC = ()=> {
  return (
    <ThemeProvider theme={dark} >
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
}
export default App;
