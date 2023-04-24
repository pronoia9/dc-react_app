import React from 'react';
import styled, { keyframes } from 'styled-components';

import { MockupAnimation } from '../animations/';
import { WaveBackground } from '../backgrounds';
import { PurchaseButton } from '../buttons';
import { H1, MediumText } from '../styles/TextStyles';
import { heroSection as data } from '../../utils/data';

const HeroSection = () => {
  return (
    <Wrapper>
      <WaveBackground />
      <ContentWrapper>
        <TextWrapper>
          <Title>
            Design
            <br />
            and code React apps
          </Title>
          <Description>{data.description}</Description>
          <PurchaseButton {...data.button} />
        </TextWrapper>
        <MockupAnimation />
      </ContentWrapper>
    </Wrapper>
  );
};

export default HeroSection;

const animation = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// STYLED COMPONENTS
const Wrapper = styled.div`
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
  display: grid;
  grid-template-columns: 360px auto;
`;

const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;
`;

const Title = styled(H1)`
  color: white;
  animation: ${animation};
`;

const Description = styled(MediumText)``;
