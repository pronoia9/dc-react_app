import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { heroSection as data } from '../../utils/data';

const HeroSection = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
        </TextWrapper>
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

const TextWrapper = styled.div`
  max-width: 360px;
`;
