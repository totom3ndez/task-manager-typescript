import { Link } from 'react-router-dom'
import { useUser, SignedIn, SignOutButton } from '@clerk/clerk-react'
import Button from './Button'
import { useEffect, useState } from 'react'
import { LuLogOut } from "react-icons/lu";
import { IoMdHome } from "react-icons/io";

const Header = () => {
  const [isMobile, setIsMobile] = useState(true)
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }
  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])



  const { user } = useUser()
  return (
    <header className='flex justify-between p-4 font-bold items-center'>
      <Link to="/">{isMobile ? <IoMdHome className='cursor-pointer size-8' /> : 'Task Manager'}</Link>
      <SignedIn>
      </SignedIn>
      <p className='text-center text-white'>
        Hello, {user ? user.firstName : 'Guest'}
      </p>
      <SignedIn>
        <Link to="/create-task" className='p-2 bg-blue-700 rounded-xl text-white'>New Task</Link>
        <SignOutButton>
          <Button type="button" color='text-red-700 p-2'>
            {isMobile ? <LuLogOut className='cursor-pointer size-8' /> : 'Sign out'}
          </Button>
        </SignOutButton>
      </SignedIn>
    </header>
  )
}

export default Header