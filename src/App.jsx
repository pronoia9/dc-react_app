import { Layout, SEO } from './components/layout';
import { HeroSection } from './components/sections';

export default function App() {
  return (
    <Layout>
      <SEO title='Home' />
      <HeroSection />
    </Layout>
  );
}
