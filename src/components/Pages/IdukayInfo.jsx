import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { cambiarTitulo } from '@/utils/cambiarTitulo'

const IdukayInfo = () => {
  useEffect(() => {
    cambiarTitulo('Idukay')
  }, [])

  return (
    <section className='flex w-11/12 flex-col items-center justify-center space-y-4 md:w-1/2'>
      <div className='card-lg card-border bg-base-100 image-full shadow-sm'>
        <figure>
          <img
            src='/idukay.webp'
            alt='Idukay Logo'
          />
        </figure>
        <div className='card-body items-center justify-end text-center'>
          <h3 className='card-title'>Nuestro sistema de gestión académica</h3>
          <div className='card-actions justify-end'>
            <Link
              to='https://www.idukay.com/'
              target='_blank'
            >
              <button className='btn'>Más información</button>
            </Link>
          </div>
        </div>
      </div>

      <div className='card-lg card-border bg-base-100 w-full shadow-sm md:w-lg'>
        <div className='card-body'>
          <h2 className='card-title'></h2>
          <p>
            En nuestra institución utilizamos Idukay como sistema de gestión
            académica, el cual nos permite organizar y administrar la
            información escolar de manera clara y estructurada.
          </p>
          <p>
            Este sistema nos ayuda a centralizar los procesos académicos y a
            mantener la información actualizada durante todo el ciclo escolar.
          </p>
        </div>
      </div>

      <div className='card-lg card-border bg-base-300 text-base-content w-full shadow-sm md:w-lg'>
        <div className='card-body'>
          <h2 className='card-title'>¿Qué nos permite gestionar?</h2>
          <ul>
            <li className='before:text-success before:content-["✓_"]'>
              Administrar la información académica de los alumnos.
            </li>
            <li className='before:text-success before:content-["✓_"]'>
              Registrar calificaciones y evaluaciones.
            </li>
            <li className='before:text-success before:content-["✓_"]'>
              Llevar el control de grupos, materias y periodos escolares.
            </li>
            <li className='before:text-success before:content-["✓_"]'>
              Dar seguimiento al desempeño académico.
            </li>
            <li className='before:text-success before:content-["✓_"]'>
              Mantener los registros organizados por ciclo escolar.
            </li>
          </ul>
        </div>
      </div>

      <div className='card-lg card-border bg-base-100 w-full shadow-sm md:w-lg'>
        <div className='card-body'>
          <h2 className='card-title'>Beneficios</h2>
          <p>
            El uso de Idukay nos permite ofrecer a las familias información
            académica clara y accesible, así como un seguimiento oportuno del
            desempeño escolar de los alumnos. Los registros se mantienen
            organizados y actualizados durante todo el ciclo escolar, lo que
            facilita una comunicación más ordenada y eficiente entre la escuela
            y las familias.
          </p>
        </div>
      </div>
    </section>
  )
}

export default IdukayInfo
