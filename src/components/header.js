import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Navbar from "./navbar"
import "./navbar.css"


const Header = () => (
  <header
    style={{
      background: `#C41E3A`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        width: 'auto',
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ marginRight: 0, marginBottom: '10px', width: '500px'}}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Lowell Nexus
        </Link>
      </h1>
      <Navbar />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
