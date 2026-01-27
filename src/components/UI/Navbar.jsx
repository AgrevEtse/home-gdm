import { Link } from 'react-router-dom'
import { TextAlignStart } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className='navbar bg-base-100 shadow-sm'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div
            tabIndex={0}
            role='button'
            className='btn btn-ghost btn-circle'
          >
            <TextAlignStart className='h-5 w-5' />
          </div>
          <ul
            tabIndex='-1'
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'
          >
            <li>
              <Link to='/'>Inicio</Link>
            </li>
            <li>
              <Link
                to='https://formulario.gomezdemendiola.net'
                target='_blank'
              >
                Inscripciones
              </Link>
            </li>
            <li>
              <Link to='/quienes-somos'>¿Quiénes Somos?</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='navbar-center'>
        <Link
          to='/'
          className='btn btn-ghost text-xl'
        >
          Escuela Gómez De Mendiola
        </Link>
      </div>
      <div className='navbar-end'></div>
    </nav>
  )
}

export default Navbar
