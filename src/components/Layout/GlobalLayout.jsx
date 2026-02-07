import { Outlet } from 'react-router-dom'

import Navbar from '@/components/UI/Navbar'
import Footer from '@/components/UI/Footer'

const GlobalLayout = () => {
  return (
    <div className='flex min-h-screen flex-col'>
      <header className='p-4'>
        <Navbar />
      </header>
      <main className='flex flex-1 flex-col items-center justify-center p-4'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default GlobalLayout
