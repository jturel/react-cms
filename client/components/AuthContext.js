import React, { createContext, useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  return (
    <AuthContext.Provider value={{ user: null }}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.any
}

export function withAuth(Component) {
  return () => {
    const { user } = useAuth()
    const router = useRouter()

    useEffect(() => {
      if (!user) {
        console.log("no user, redirecting")
        router.push('/login')
      }
    }, [user])

    if (user) {
      return <Component/>
    } else {
      return null
    }
  }
}

export default function useAuth() {
  return useContext(AuthContext)
}
