import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { headerSection } from '../../utils/data';

export default function Header() {
  return (
    <Wrapper>
      <img src={headerSection.logo} />
      {headerSection.navLinks.map(({ title, icon, link }, index) => (
        <Link to={link} key={index}>
          <img src={icon} alt={title} />
          <p>{title}</p>
        </Link>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div``;
