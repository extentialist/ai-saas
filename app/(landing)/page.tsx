import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const LandingPage = () => {
  return (
    <div className='px-6 py-6'>
      <p className='mb-4'>
        Welcome to the Landing Page (Unprotected)
      </p>
    <Link href='/sign-in'>
      <Button className='mr-2'>
        Sign In
      </Button>
    </Link><Link href='/sign-up'>
        <Button>
          Register
        </Button>
      </Link></div>
  )
}

export default LandingPage