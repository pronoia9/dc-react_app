import { HeaderSection, HeroSection } from './components/sections';
import { GlobalStyle } from './components/styles/GlobalStyles';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <HeaderSection />
      <HeroSection />
    </>
  );
}
