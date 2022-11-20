import React from 'react'
import Link from 'next/link'
import { Router, useRouter } from 'next/router'


const AuthNavigation = ({path, text}) => {
  return (
    <>
    <Link href={path}>
        <p className='auth-nav-text'>{text}</p>
    </Link>
    </>
  )
}

export default AuthNavigation