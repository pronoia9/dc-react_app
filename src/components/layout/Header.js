import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { headerSection } from '../../utils/data';

export default function Header() {
  return (
    <Wrapper>
      <img src={headerSection.logo} />
      <MenuWrapper count={headerSection?.navLinks?.length}>
        {headerSection.navLinks.map(({ title, icon, link }, index) => (
          <Link to={link} key={index}>
            <MenuItem title={title?.length}>
              <img src={icon} alt={title} />
              {title}
            </MenuItem>
          </Link>
        ))}
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

const MenuItem = styled.div`
  color: rgba(255, 255, 255, 0.7);
  display: grid;
  grid-template-columns: 24px auto;
  gap: ${(props) => (props.title ? '10px' : '0px')};
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  transition: 0.5s ease-out;

  :hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1), inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  }
`;
