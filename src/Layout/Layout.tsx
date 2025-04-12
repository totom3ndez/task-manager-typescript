import Header from '../components/Header'
import { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
  return (

    <div className='mx-auto bg-[#101010] min-h-screen text-white max-w-xl'>
      <Header />
      <main>
        {children}
      </main>
    </div>)
}

export default Layout