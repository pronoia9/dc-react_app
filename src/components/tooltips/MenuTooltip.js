import React from 'react';
import styled from 'styled-components';
import { MenuButton } from '../buttons';

export default function MenuTooltip({ data, isOpen }) {
  return (
    <Wrapper isOpen={isOpen}>
      {data.map((item, index) => (
        <MenuButton key={`${index}-${item.title}`} {...item} index={index} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: rgba(15, 14, 71, 0.3);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 20px;
  padding: 20px;
  position: absolute;
  top: 60px;
  right: 30px;
  opacity: ${(props) => (props.isOpen ? '1' : '0.5')};
  z-index: 1;
  display: grid;
  gap: 10px;
  grid-template-columns: 150px;
`;
