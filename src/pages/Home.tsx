import TaskList from '../tasks/components/TaskList'
import TaskHistory from '../tasks/components/TaskHistory'
import { SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react';


const Home = () => {
  return (
    <>
      <div className='flex justify-between items-center p-4'>
        <div className='flex gap-4'>
          <SignedIn>
            <div className='flex flex-col justify-center items-center'>
              <div className='flex gap-4 align-center'>
              </div>
              <div>
                <TaskList />
                <TaskHistory />
              </div>
            </div>
          </SignedIn>
          <SignedOut>
            <div className='items-center flex gap-2'>
              <p>Hello guest 👋, please </p>
              <div className='p-2 bg-blue-700 rounded-xl text-white cursor-pointer'>
                <SignInButton mode="modal">Sign in</SignInButton>
              </div>
              <p> to use the app.</p>
            </div>
          </SignedOut>
        </div>
      </div>
    </>
  )
}

export default Home