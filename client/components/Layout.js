import { Container } from 'reactstrap'
import Navigation from '../components/Navigation'
import React from 'react'
import PropTypes from 'prop-types'

const Layout = (props) => (
  <Container>
    <Navigation />
    {props.children}
  </Container>
)

Layout.propTypes = {
  children: PropTypes.any // this can be an array or object
}

export default Layout
