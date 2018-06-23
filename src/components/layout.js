import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery } from 'gatsby'
import { graphql } from 'gatsby'

import Header from './header'
import './layout.css'

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
            { name: 'description', content: 'GMentor - найди своего Ментора.' }
          ]}
          script={[
            { src: "https://cdnjs.cloudflare.com/ajax/libs/css-doodle/0.2.3/css-doodle.min.js", type: "text/javascript" }
          ]}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
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
