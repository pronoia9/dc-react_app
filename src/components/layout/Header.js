import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { MenuButton } from '../buttons';
import { MenuTooltip } from '../tooltips';
import { headerSection as data } from '../../utils/data';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <Link to='/'>
        <img src={data.logo} alt='logo' />
      </Link>
      <MenuWrapper count={data?.navLinks?.length}>
        {data?.navLinks?.map((link, index) =>
          link.title === 'account' ? (
            <button>Account</button>
          ) : (
            <MenuButton
              key={`${index}-${link.title}`}
              {...link}
              index={index}
              onClick={() => setIsOpen(!isOpen)}
            />
          )
        )}
      </MenuWrapper>
      <MenuTooltip data={data.tooltips.account} isOpen={isOpen} />
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
