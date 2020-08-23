import React, { createContext, useContext } from 'react'
import PropTypes from 'prop-types'

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  return (
    <AuthContext.Provider>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.any
}

export default function useAuth() {
  return useContext(AuthContext)
}
