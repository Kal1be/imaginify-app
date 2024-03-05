import { SignIn } from '@clerk/nextjs'
import React from 'react'

function SigninPage() {
  return (
    <div className='auth'>
      <SignIn/>
    </div>
  )
}

export default SigninPage
