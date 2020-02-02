import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { MdMenu } from 'react-icons/md';

import logoUrl from '../images/ds-logo.svg';
import { colors } from './colors';
import { breakpoint } from './breakpoints';
import { MobileTakeOver } from './mobileTakeOver';

const HeaderWrapper = styled.header`
  background-color: ${colors.primary};
`;

const HeaderContainer = styled.div`
  display: flex;
  max-width: 96rem;
  margin: 0 auto;
  padding: 0.8rem 1.6rem;
  align-items: center;
`;

const Logo = styled(Link)`
  display: inline-block;
  width: 6.4rem;

  ${breakpoint.md`
    width: 9.6rem;
  `}
`;

const Nav = styled(MobileTakeOver)`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  > ul {
    > li {
      margin-bottom: 0.8rem;
    }
  }

  ${breakpoint.md`
    ul {
      display: flex;
      justify-content: flex-end;

      > li {
        margin-left: 0.8rem;

        &:first-child {
          margin-left: 0;
        }
      }
    }
  `}
`;

const NavLink = styled.a`
  display: block;
  font-weight: 500;
  padding: 0.8rem 1.6rem;

  ${breakpoint.md`
    padding: 0 1rem;

    &:hover {
      text-decoration: underline;
    }
  `}
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <Logo>
        <img src={logoUrl} alt="DenverScript" />
      </Logo>

      <Nav Icon={MdMenu}>
        <ul>
          <li>
            <NavLink href="https://www.meetup.com/DenverScript/" target="_blank" rel="noopener">
              Meetup
            </NavLink>
          </li>
          <li>
            <NavLink href="https://www.meetup.com/DenverScript/" target="_blank" rel="noopener">
              Open Collective
            </NavLink>
          </li>
          <li>
            <NavLink href="https://www.youtube.com/channel/UCIatzpIjlgtFsGofeZSdVLQ/videos" target="_blank" rel="noopener">
              Youtube
            </NavLink>
          </li>
          <li>
            <NavLink href="http://bit.ly/ds-talk" target="_blank" rel="noopener">
              Submit a talk
            </NavLink>
          </li>
        </ul>
      </Nav>
    </HeaderContainer>
  </HeaderWrapper>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;

