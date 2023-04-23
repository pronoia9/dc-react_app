import styled, { createGlobalStyle } from 'styled-components';
import { themes } from './ColorStyles';

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${themes.dark.background1};
  }
`;
