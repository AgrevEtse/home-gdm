import { Link } from 'react-router-dom'

import { List } from '@/assets/icons'

const Navbar = () => {
  return (
    <nav className='navbar bg-base-300 shadow-sm'>
      <div className='navbar-start'>
        <Link
          to='/'
          className='btn btn-ghost hidden text-xl md:block'
        >
          Colegio Gómez De Mendiola
        </Link>
        <div className='dropdown md:hidden'>
          <div
            tabIndex={0}
            role='button'
            className='btn btn-ghost btn-circle'
          >
            <List className='w-6' />
          </div>
          <ul
            tabIndex='-1'
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'
          >
            <li>
              <Link to='/'>Inicio</Link>
            </li>
            <li>
              <Link to='/escolaridades'>Escolaridades</Link>
            </li>
            <li>
              <Link to='/idukay'>Idukay</Link>
            </li>
            <li>
              <Link to='/mattilda'>Mattilda</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='navbar-center'></div>
      <div className='navbar-end'>
        <Link
          to='/'
          className='btn btn-ghost block text-xl md:hidden'
        >
          Colegio Gómez De Mendiola
        </Link>
        <div className='hidden space-x-3 md:block'>
          <Link
            to='/'
            className='btn btn-ghost'
          >
            Inicio
          </Link>
          <Link
            to='/escolaridades'
            className='btn btn-ghost'
          >
            Escolaridades
          </Link>
          <Link
            to='/idukay'
            className='btn btn-ghost'
          >
            Idukay
          </Link>
          <Link
            to='/mattilda'
            className='btn btn-ghost'
          >
            Mattilda
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
