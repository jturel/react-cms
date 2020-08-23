import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import { AuthProvider } from '../components/AuthContext'
import PropTypes from 'prop-types'

function ReactCms({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

ReactCms.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.object,
}

export default ReactCms
