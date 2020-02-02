/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Header from './header';
import { Reset } from './reset';
import { breakpoint } from './breakpoints';
import { colors } from './colors';

const MainLayout = styled.div`
  margin: 0 auto;
  max-width: 96rem;
  padding: 0 1.6rem;
`;

const FooterWrapper = styled.footer`
  margin-top: 3.2rem;
  background-color: ${colors.primary};
`;

const Footer = styled.footer`
  display: flex;
  max-width: 96rem;
  margin: 0 auto;
  padding: 0.8rem 1.6rem;
  align-items: center;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Reset />
      <Header siteTitle={data.site.siteMetadata.title} />
      <MainLayout>
        <main>{children}</main>
      </MainLayout>
      <FooterWrapper>
        <Footer>
          © {new Date().getFullYear()} DenverScript
        </Footer>
      </FooterWrapper>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
