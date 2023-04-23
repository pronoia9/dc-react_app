import React from 'react';
import styled from 'styled-components';

import { H1, MediumText } from '../styles/TextStyles';
import { heroSection as data } from '../../utils/data';

const HeroSection = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>
            Design
            <br />
            and code React apps
          </Title>
          <Description>{data.description}</Description>
        </TextWrapper>
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
  display: grid;
  gap: 30px;
`;

const Title = styled(H1)`
  color: white;
`;

const Description = styled(MediumText)``;
