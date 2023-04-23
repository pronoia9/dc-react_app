import React from 'react';

import { Layout, Seo } from '../components/layout';
import { HeroSection } from '../components/sections';

function IndexPage() {
  return (
    <Layout>
      <Seo title='Home' />
      <HeroSection />
    </Layout>
  );
}

export default IndexPage;
