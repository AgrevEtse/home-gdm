import { Link } from 'react-router-dom'

import { FacebookLogo } from '@/assets/icons'

const Footer = () => {
  return (
    <footer className='footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4'>
      <aside className='grid-flow-col items-center'>
        <img
          src='/EscudoGdM.png'
          alt='Logo'
          className='w-12'
        />
        <p>
          Colegio Gómez de Mendiola, Cultura Popular A.C. -{' '}
          {new Date().getFullYear()}
        </p>
      </aside>
      <nav className='grid-flow-col gap-4 md:place-self-center md:justify-self-end'>
        <a
          href='https://www.facebook.com/GomezdeMendiola/?locale=es_LA'
          rel='noopener noreferrer'
          target='_blank'
        >
          <FacebookLogo className='h-12' />
        </a>
      </nav>
    </footer>
  )
}

export default Footer
