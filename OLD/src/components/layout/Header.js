import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { MenuButton } from '../buttons';
import { MenuTooltip } from '../tooltips';
import { headerSection as data } from '../../../../src/utils/data';

export default function Header() {
  const [isMoreOpen, setisMoreOpen] = useState(false);
  const [isSearchOpen, setisSearchOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  const handleClick = (e, link) => {
    if (link.includes('more') || link.includes('search') || link.includes('account')) e.preventDefault();
    if (link.includes('more')) setisMoreOpen(!isMoreOpen);
    if (link.includes('search')) setisSearchOpen(!isSearchOpen);
    if (link.includes('account')) setIsAccountOpen(!isAccountOpen);
  };

  return (
    <Wrapper>
      <Link to='/'>
        <img src={data.logo} alt='logo' />
      </Link>
      <MenuWrapper count={data?.navLinks?.length}>
        {data?.navLinks?.map((link, index) => (
          <MenuButton
            key={`${index}${link.title}`}
            {...link}
            index={index}
            handleClick={(e) => handleClick(e, link.icon)}
          />
        ))}
      </MenuWrapper>
      <MenuTooltip data={data.tooltips.account} isOpen={isAccountOpen} />
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
