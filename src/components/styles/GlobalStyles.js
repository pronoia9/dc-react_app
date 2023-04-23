import { createGlobalStyle } from 'styled-components';
import { themes } from './ColorStyles';

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${themes.light.background1};

    @media (prefers-color-scheme: dark) {
      background: ${themes.dark.background1};
    }
  }
`;
