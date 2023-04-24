import React from 'react';
import styled from 'styled-components';

import { MenuButton } from '../buttons';
import { headerSection } from '../../utils/data';

export default function Header() {
  return (
    <Wrapper>
      <img src={headerSection.logo} />
      <MenuWrapper count={headerSection?.navLinks?.length}>
        <MenuButton data={headerSection?.navLinks} />
      </MenuWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 60px;
  display: grid;
  grid-template-columns: 44px auto;
  width: 100%;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;
`;

const MenuWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.count}, auto);
  gap: 30px;
`;
