import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Goal, ScanEye, MessageSquareHeart, Church } from 'lucide-react'

import { cambiarTitulo } from '@/utils/cambiarTitulo'

const Home = () => {
  useEffect(() => {
    cambiarTitulo('Home')
  }, [])

  return (
    <section className='bg-base-100 px-6 py-16'>
      {/* Header */}
      <img
        src='/EscudoGdM.png'
        alt='Logo Colegio Gómez de Mendiola'
        className='mx-auto h-60'
      />
      <div className='mx-auto max-w-5xl text-center'>
        <div className='bg-secondary mx-auto my-4 h-1 w-32 rounded' />
        <h1 className='text-lg text-gray-600'>¿Quiénes Somos?</h1>
      </div>

      {/* descripción */}
      <div className='bg-base-200 mx-auto mt-10 max-w-4xl rounded-xl p-8 text-center shadow-inner'>
        <p className='text-base leading-relaxed text-gray-600'>
          {' '}
          <span className='text-primary font-semibold'>
            Somos una institución católica
          </span>{' '}
          con más de 70 años de experiencia educativa, donde nuestra prioridad
          son sus hijos y, nuestro objetivo, es ser la mejor alternativa
          educacional para ellos. Contamos con maestros altamente capacitados
          para desarrollar en los alumnos, conocimientos, habilidades y valores
          universales, que los conduzcan a ser personas exitosas.
        </p>
      </div>

      <div className='mt-8 flex justify-center gap-4'>
        <Link
          to='https://formulario.gomezdemendiola.net'
          target='_blank'
          className='btn btn-secondary'
        >
          Inscripciones
        </Link>
        <Link
          to='/escolaridades'
          className='btn btn-secondary'
        >
          Escolaridades
        </Link>
      </div>

      {/* Cards */}
      <div className='mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-3'>
        {/* Misión */}
        <div className='card bg-base-100 rounded-xl p-6 text-center shadow-md transition-all hover:scale-105 hover:shadow-xl'>
          <h3 className='text-primary mb-2 text-2xl font-bold'>
            <Goal className='mr-2 inline-block text-lime-500' /> Misión
          </h3>
          <div className='bg-secondary mx-auto mb-4 h-1 w-20 rounded' />
          <p className='text-sm text-gray-600'>
            Laborar con denuedo, apegados al lineamiento de la «S.E.P.», en la
            formación integral de todos los miembros de esta institución; para
            lograr en cada uno de ellos, un ser humano creativo, autónomo,
            constructivo, libre, responsable y capaz de integrarse a la
            sociedad.
          </p>
        </div>

        {/* Visión */}
        <div className='card bg-base-100 rounded-xl p-6 text-center shadow-md transition-all hover:scale-105 hover:shadow-xl'>
          <h3 className='text-primary mb-2 text-2xl font-bold'>
            <ScanEye className='mr-2 inline-block text-indigo-700' /> Visión
          </h3>
          <div className='bg-secondary mx-auto mb-4 h-1 w-20 rounded' />
          <p className='text-sm text-gray-600'>
            Ser una institución educativa reconocida por su calidad académica,
            formación en valores y compromiso con la comunidad.
          </p>
        </div>

        {/* Valores */}
        <div className='card bg-base-100 rounded-xl p-6 text-center shadow-md transition-all hover:scale-105 hover:shadow-xl'>
          <h3 className='text-primary mb-2 text-2xl font-bold'>
            <MessageSquareHeart className='mr-2 inline-block text-rose-700' />{' '}
            Valores
          </h3>
          <div className='bg-secondary mx-auto mb-4 h-1 w-20 rounded' />
          <ul className='space-y-1 text-sm text-gray-600'>
            <li className='before:text-success before:content-["✓_"]'>Fe</li>
            <li className='before:text-success before:content-["✓_"]'>
              Respeto
            </li>
            <li className='before:text-success before:content-["✓_"]'>
              Responsabilidad
            </li>
            <li className='before:text-success before:content-["✓_"]'>
              Solidaridad
            </li>
            <li className='before:text-success before:content-["✓_"]'>
              Honestidad
            </li>
          </ul>
        </div>
      </div>

      {/* Identidad Católica */}
      <div className='bg-base-200 mx-auto mt-20 max-w-4xl rounded-xl p-8 text-center shadow-inner'>
        <h2 className='text-primary mb-3 text-3xl font-bold'>
          <Church className='mr-2 inline-block text-amber-800' /> Identidad
          Católica
        </h2>
        <p className='text-gray-600'>
          En el Colegio Gómez de Mendiola promovemos una educación basada en el
          Evangelio, fortaleciendo la espiritualidad, el amor al prójimo y la
          vivencia diaria de la fe en cada etapa formativa.
        </p>
      </div>

      {/* Cierre */}
      <div className='mx-auto mt-16 max-w-3xl text-center'>
        <p className='text-sm text-gray-500 italic'>
          “Educar es formar el corazón y la mente para servir a Dios y a los
          demás.”
        </p>
      </div>
    </section>
  )
}

export default Home
