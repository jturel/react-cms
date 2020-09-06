import React, { createContext, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import { getCurrentUser } from '../api/users'

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect (() => {
    async function setCurrentUser() {
      const data = await getCurrentUser();

      if(!data.error) {
        setUser(data);
      }

      setLoadingUser(false);
    }
    setCurrentUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loadingUser }}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.any
}

export function withAuth(Component) {
  return () => {
    const { user, loadingUser } = useAuth()
    const router = useRouter()

    useEffect(() => {
      if (!loadingUser && !user) {
        router.push('/login')
      }
    }, [user, loadingUser])

    /*
    if (user) {
      return <Component/>
    } else {
      return null
    }
    */
    return <Component/>
  }
}

export default function useAuth() {
  return useContext(AuthContext)
}
