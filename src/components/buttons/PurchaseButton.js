import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { Caption2, SmallText } from '../styles/TextStyles';

export default function PurchaseButton({ icon, title, subtitle }) {
  return (
    <Link to='/page-2'>
      <Wrapper>
        <IconWrapper>
          <Icon src={icon} />
        </IconWrapper>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Wrapper>
    </Link>
  );
}

const Wrapper = styled.div`
  width: 280px;
  height: 77px;
  padding: 12px;
  background: linear-gradient(180deg, #ffffff 0%, #d9dfff 100%);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 20px 40px rgba(23, 0, 102, 0.2),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
  border-radius: 20px;
`;

const IconWrapper = styled.div`
  width: 45px;
  height: 45px;
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
  box-shadow: 0px 10px 20px rgba(182, 153, 255, 0.3);
  border-radius: 50%;
  display: grid;
  justify-content: center;
  align-content: center;
`;

const Icon = styled.img`
  width: 29px;
  height: 29px;
`;

const Title = styled(Caption2)`
  color: black;
`;

const Subtitle = styled(SmallText)`
  color: #595c7b;
`;
