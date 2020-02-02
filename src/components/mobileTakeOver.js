import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useWindowWidth } from './useWindowWidth';
import { breakpoint } from './breakpoints';
import { MdClose } from 'react-icons/md';
import { colors } from './colors';

const xTranslation = ({ isOpen }) => {
  if (isOpen) {
    return 'translate(0, 0)';
  }
  return 'translate(0, 100%)';
};

const TakeOverWrapper = styled.div(({ isOpen }) => `
  z-index: ${isOpen ? 9999999 : 1};

  .takeover-active &:not(.current-takeover) {
    z-index: -1;
  }
`);

const TakeOver = styled.div`
  background-color: ${colors.primary};
  height: 100%;
  left: 0;
  overflow: auto;
  position: fixed;
  top: 0;
  transform: ${xTranslation};
  transition: transform ease-in-out 0.25s;
  width: 100%;
  z-index: 9999999;

  ${breakpoint.md`
    overflow: unset;
    position: static;
    transform: translate(0, 0);
  `}
`;

const StyledClose = styled(MdClose)`
  height: 2.4rem;
  width: 2.4rem;
  cursor: pointer;
  margin: 1.6rem;

  ${breakpoint.md`
    display: none;
  `}
`;

const StyledButton = styled.button`
  background-color: transparent;
  font-size: 2.6rem;

  ${breakpoint.md`
    display: none;
  `}
`;

const MobileTakeOver = ({
  Icon,
  children,
  className,
}) => {
  const windowChanged = typeof window !== 'undefined' ? useWindowWidth() : false;
  const [isOpen, setIsOpen] = useState(false);
  const toggleTakeOver = () => {
    document.body.classList.toggle('takeover-active');
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Close takeover if a route change happens
    document.body.classList.remove('takeover-active');
    setIsOpen(false);
  }, [windowChanged]);

  return (
    <TakeOverWrapper
      className={isOpen ? `current-takeover ${className}` : className}
      isOpen={isOpen}
    >
      <StyledButton onClick={toggleTakeOver}>
        <Icon />
      </StyledButton>

      <TakeOver isOpen={isOpen}>
        <StyledClose onClick={toggleTakeOver} />
        {children}
      </TakeOver>
    </TakeOverWrapper>
  );
};

export { MobileTakeOver };
