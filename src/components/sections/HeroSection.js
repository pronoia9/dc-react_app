import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const HeroSection = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <img src='/images/logos/logo.svg' alt='logo' />
        <h1>Design and code React apps</h1>
        <p>
          Don’t skip design. Learn design and code, by building real apps with React and Swift. Complete
          courses about the best tools.
        </p>
        <Link to='/page-2/'>Go to page 2</Link> <br />
      </ContentWrapper>
    </Wrapper>
  );
};

export default HeroSection;

// STYLED COMPONENTS
const Wrapper = styled.div`
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
`;

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
`;
