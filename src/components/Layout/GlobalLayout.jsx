import { Outlet } from 'react-router-dom'

import Navbar from '@/components/UI/Navbar'
import Footer from '@/components/UI/Footer'

const GlobalLayout = () => {
  return (
    <div className='flex min-h-screen flex-col'>
      <header className='p-4'>
        <Navbar />
      </header>
      <main className='flex-1 p-4 flex flex-col items-center justify-center'>
        <Outlet />
      </main>
      <footer className='p-4 text-sm'>
        <Footer />
      </footer>
    </div>
  )
}

export default GlobalLayout
