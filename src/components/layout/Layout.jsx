import { Header } from './';
import { GlobalStyle } from '../styles/GlobalStyles';

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      {children}
    </>
  );
}
