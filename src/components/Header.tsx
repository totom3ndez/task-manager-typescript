import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='flex justify-between p-4 font-bold items-center'>
      <Link to="/">Task Manager</Link>
      <Link to="/create-task" className='p-2 bg-blue-700 rounded-xl text-white'>New Task</Link>
    </header>
  )
}

export default Header