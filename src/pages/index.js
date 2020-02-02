import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import {breakpoint} from '../components/breakpoints';
import Layout from '../components/layout';
import SEO from '../components/seo';
import heroUrl from '../images/garrett-presenting-hero.jpg';

const Hero = styled.div`
  background: transparent url(${heroUrl}) no-repeat center center;
  background-size: cover;
  padding-top: 45vh;
  width: 100vw;
  margin-left: 50%;
  transform: translateX(-50%);
  color: #fff;
  margin-bottom: 3.2rem;

  ${breakpoint.md`
    padding-top: 65vh;
  `}
`;

const HeroHeader = styled.h1`
  font-size: 2.8rem;
  position: absolute;
  bottom: 1.6rem;
  left: 1.6rem;
  text-shadow: 1px 1px 4px #000;
`;

const H2 = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 1.6rem;
`;

const P = styled.p`
  line-height: 2rem;
  margin-bottom: 1.6rem;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Hero>
      <HeroHeader>Welcome to DenverScript!</HeroHeader>
    </Hero>

    <H2>What is DenverScript?</H2>

    <P>
      DenverScript is a community of developers focused on JavaScript in downtown Denver.
      We will be discussing best practices, features coming to ECMAScript, application development,
      what's going on in the JS community, and more. If you have any interest in upping your JavaScript
      knowledge, then please come check us out.
    </P>

    <P>
      Follow our Twitter account at
      {' '}<a href="https://twitter.com/denverscript" target="_blank" rel="noopener">@DenverScript</a>
      {' '}for JavaScript tweets and Meetup announcements, and join us
      DenverDevs
      to chat!
    </P>

    <P>
      We care about providing a safe harassment-free community, so read our
      {' '}<a href="http://www.meetup.com/DenverScript/pages/Code_of_Conduct/" target="_blank" rel="noopener">Code of Conduct</a>
      {' '}and know who to contact if there are issues.
    </P>
  </Layout>
);

export default IndexPage;
