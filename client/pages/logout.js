import React from 'react'
import Link from 'next/link'

const Logout = () => (
  <React.Fragment>
    <div>
      You&apos;ve been logged out. 
    </div>
    <div>
      <Link href="/login">
        <a>Log back in.</a>
      </Link>
    </div>
  </React.Fragment>
)

export default Logout
