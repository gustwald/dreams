import React from "react"
import PropTypes from "prop-types"
import { LayoutWrapper } from '../style';
import "./layout.css"

const Layout = ({children}) => {
  return (
      <LayoutWrapper>
        <main>{children}</main>
      </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
