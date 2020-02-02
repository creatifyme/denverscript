import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <h1>Welcome to DenverScript!</h1>

    <p>
      DenverScript is a community of developers focused on JavaScript in downtown Denver.
      We will be discussing best practices, features coming to ECMAScript, application development,
      what's going on in the JS community, and more. If you have any interest in upping your JavaScript
      knowledge, then please come check us out.
    </p>

    <p>
      Follow our Twitter account at @DenverScript (https://twitter.com/denverscript)
      for JavaScript tweets and Meetup announcements, and join us at #denverscript on Freenode to chat!
    </p>

    <p>
      We care about providing a safe harassment-free community, so read our Code of Conduct
      (http://www.meetup.com/DenverScript/pages/Code_of_Conduct/) and know who to contact if there are issues.
    </p>
  </Layout>
);

export default IndexPage;
