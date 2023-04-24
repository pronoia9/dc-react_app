import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import { MenuButton } from '../buttons';
import { MenuTooltip } from '../tooltips';
import { headerData } from '../../utils/data';

export default function HeaderSection() {
  const [isOpen, setIsOpen] = useState({ more: false, search: false, account: false });

  useEffect(() => {}, []);

  const handleClick = () => {};

  const handleClickOutside = () => {};

  return <div></div>;
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
