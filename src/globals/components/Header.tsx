import { Link } from 'react-router-dom'
import { useUser, SignedIn, SignOutButton } from '@clerk/clerk-react'
import Button from './Button'

const Header = () => {
  const { user } = useUser()
  return (
    <header className='flex justify-between p-4 font-bold items-center'>
      <Link to="/">Task Manager</Link>
      <SignedIn>
        <Link to="/create-task" className='p-2 bg-blue-700 rounded-xl text-white'>New Task</Link>
      </SignedIn>
      <Button type="button" color='text-white p-2' >
        Hello, {user ? user.firstName : 'Guest'}
      </Button>
      <SignedIn>
        <SignOutButton>
          <Button type="button" color='text-red-700 p-2'>
            Sign Out
          </Button>
        </SignOutButton>
      </SignedIn>
    </header>
  )
}

export default Header