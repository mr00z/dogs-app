import { createGlobalStyle } from 'styled-components';

import { BACKGROUND } from './colors';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${BACKGROUND};
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    height: 100%;
  }

  html {
    height: 100%;
  }

  #root {
    height: 100%;
  }
`;
