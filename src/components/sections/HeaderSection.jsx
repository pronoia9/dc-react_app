import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import { MenuButton } from '../buttons';
import { MenuTooltip } from '../tooltips';
import { headerData as data } from '../../utils/data';

export default function HeaderSection() {
  const [isOpen, setIsOpen] = useState({ more: false, search: false, account: false });

  useEffect(() => {}, []);

  const handleClick = (e, title) => {
    if (title === 'more' || title === 'search' || title === 'account') {
      console.log(title);
      e.preventDefault();
      setIsOpen((isOpen) => ({ ...isOpen, [title]: !isOpen[title] }));
    }
  };

  const handleClickOutside = () => {};

  return (
    <Wrapper>
      <img src={data.logo} alt='logo' />
      <MenuWrapper count={data.navLinks.length}>
        {data.navLinks.map((item, index) => (
          <div key={`nav-${index}`}>
            <MenuButton {...item} handleClick={(e) => handleClick(e, item.title)} />
            {item.tooltip && <MenuTooltip isOpen={isOpen[item.title]} data={data.tooltips[item.title]} />}
            {/* item.link === '/account' ? (
            <MenuButton item={item} key={index} onClick={(e) => handleClick(e)} />
          ) : (
            <MenuButton item={item} key={index} />
          ) */}
          </div>
        ))}
        <HamburgerWrapper>
          <MenuButton item={data.hamburger} onClick={(e) => handleClick(e)} />
        </HamburgerWrapper>
      </MenuWrapper>
      <div>{/* <MenuTooltip isOpen={isOpen} data={data.tooltips.account} /> */}</div>
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

  @media (max-width: 768px) {
    top: 30px;
  }
  @media (max-width: 450px) {
    top: 20px;
    padding: 0 20px;
  }
`;

const MenuWrapper = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(${(props) => props.count}, auto);

  @media (max-width: 768px) {
    > a {
      display: none;
    }
    grid-template-columns: auto;
  }
`;

const HamburgerWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;
