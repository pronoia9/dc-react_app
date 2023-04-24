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
            and code
            <br />
            <span>React</span> apps
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
  0% { opacity: 0; transform: translateY(-10px); filter: blur(10px); }
  100% { opacity: 1; transform: translateY(0px); filter: blur(0px);  }
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

  > * {
    opacity: 0;
    animation: ${animation} 1s forwards;

    :nth-child(1) {
      animation-delay: 0s;
    }
    :nth-child(2) {
      animation-delay: 0.2s;
    }
    :nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`;

const Title = styled(H1)`
  color: transparent;
  background: linear-gradient(180deg, #730040 0%, #301cbe 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-blend-mode: overlay, normal;

  span {
    background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 450px) {
    font-size: 48px;
  }
`;

const Description = styled(MediumText)``;
