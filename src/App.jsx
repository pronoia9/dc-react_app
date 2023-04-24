import { Layout, Seo } from './components/layout';
import { HeroSection } from './components/sections';

export default function App() {
  return (
    <Layout>
      <Seo title='Home' />
      <HeroSection />
    </Layout>
  );
}
