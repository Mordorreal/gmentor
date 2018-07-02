import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery } from 'gatsby';
import { graphql } from 'gatsby';

import './variables.scss';
import './mixins.scss';
import './normalize.css';
import './layout.scss';

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'GMentor - найди своего Ментора.' },
          ]}
          link={[
            { href: 'https://fonts.googleapis.com/css?family=Roboto:400,500,700|Oswald', rel: 'stylesheet' },
          ]}
          script={[
            { src: "https://cdnjs.cloudflare.com/ajax/libs/css-doodle/0.2.3/css-doodle.min.js" },
          ]}
        />
        <>
          {children}
        </>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element), PropTypes.element
  ]).isRequired,
}

export default Layout
