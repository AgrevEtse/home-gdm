import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { cambiarTitulo } from '@/utils/cambiarTitulo'

const MattildaInfo = () => {
  useEffect(() => {
    cambiarTitulo('Mattilda')
  }, [])

  return (
    <section className='flex w-11/12 flex-col items-center justify-center space-y-4 md:w-1/2'>
      <div className='card-lg card-border bg-base-100 image-full shadow-sm'>
        <figure>
          <img
            src='/mattilda.jpg'
            alt='Mattilda Logo'
          />
        </figure>
        <div className='card-body items-center justify-end text-center'>
          <h3 className='card-title'>Nuestro sistema de gestión financiera</h3>
          <div className='card-actions justify-end'>
            <Link
              to='https://mattilda.io/'
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
            En nuestra institución contamos con un sistema que nos permite
            llevar un control claro y ordenado de las colegiaturas y pagos
            escolares, con el objetivo de brindar información confiable y
            transparente a las familias.
          </p>
          <p>
            Este sistema nos ayuda a mantener los registros actualizados y a dar
            seguimiento adecuado a cada alumno durante el ciclo escolar.
          </p>
        </div>
      </div>

      <div className='card-lg card-border bg-base-300 text-base-content w-full shadow-sm md:w-lg'>
        <div className='card-body'>
          <h2 className='card-title'>¿Qué nos permite hacer?</h2>
          <ul>
            <li className='before:text-success before:content-["✓_"]'>
              Administrar colegiaturas y conceptos de pago.
            </li>
            <li className='before:text-success before:content-["✓_"]'>
              Registrar pagos y dar seguimiento a adeudos.
            </li>
            <li className='before:text-success before:content-["✓_"]'>
              Aplicar descuentos, becas y recargos cuando corresponda.
            </li>
            <li className='before:text-success before:content-["✓_"]'>
              Consultar el historial de pagos de cada alumno.
            </li>
            <li className='before:text-success before:content-["✓_"]'>
              Mantener la información organizada por ciclo escolar.
            </li>
          </ul>
        </div>
      </div>

      <div className='card-lg card-border bg-base-100 w-full shadow-sm md:w-lg'>
        <div className='card-body'>
          <h2 className='card-title'>Beneficios</h2>
          <p>
            Significa que la información relacionada con pagos y adeudos se
            encuentra organizada y disponible, lo que nos permite ofrecer
            claridad en todo momento y atender cualquier duda de manera más
            ágil. Los registros de pagos se mantienen actualizados, evitando
            confusiones y errores administrativos.
          </p>
        </div>
      </div>
    </section>
  )
}

export default MattildaInfo
