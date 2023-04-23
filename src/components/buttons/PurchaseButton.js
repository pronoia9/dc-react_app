import React from 'react';
import styled from 'styled-components';

export default function PurchaseButton({ title, subtitle }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Title = styled.p``;

const Subtitle = styled.p``;
