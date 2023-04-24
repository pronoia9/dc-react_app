import React from 'react';

import Header from './Header';
import { GlobalStyle } from '../../../../src/components/styles/GlobalStyles';
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
