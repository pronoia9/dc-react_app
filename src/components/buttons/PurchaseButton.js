import React from 'react';
import styled from 'styled-components';

export default function PurchaseButton({ text }) {
  return (
    <Wrapper>
      <Title>{text[0]}</Title>
      <Subtitle>{text[1]}</Subtitle>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Title = styled.p``;

const Subtitle = styled.p``;
