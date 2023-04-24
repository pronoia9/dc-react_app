import React from 'react';

import Header from './Header';
import { GlobalStyle } from '../styles/GlobalStyles';
import './layout.css';

function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
    </>
  );
}

export default Layout;
