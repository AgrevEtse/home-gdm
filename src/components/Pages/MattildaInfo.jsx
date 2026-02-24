import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import WhatsappBtn from '@/components/UI/WhatsappBtn'

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

      <div className='w-full md:w-lg'>
        <a
          href='https://familia.mattilda.io/login'
          target='_blank'
          rel='noopener noreferrer'
          className='btn btn-primary flex w-full items-center gap-2'
        >
          {/* Icono login */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5m0 0l-5-5m5 5H3'
            />
          </svg>
          Acceder a Mattilda
        </a>
      </div>
      <div className='card-lg card-border bg-base-300 text-base-content w-full shadow-sm md:w-lg'>
        <div className='card-body'>
          <h2 className='card-title'>Horario de atención - Área de Finanzas</h2>

          <ul className='space-y-1'>
            <li className='before:text-success before:content-["🕒_"]'>
              Lunes a Viernes: 7:00 AM - 2:00 PM
            </li>
            <li className='before:text-success before:content-["❌_"]'>
              Sabados y domingos: Cerrado
            </li>
          </ul>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>Contactar al área de finanzas</span>

        <WhatsappBtn
          numero={3321074970}
          mensaje='Hola buenas tardes me puede apoyar con dudas sobre cobranzas'
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>Ayuda con Mattilda</span>

        <WhatsappBtn
          numero={5538036487}
          mensaje='Hola buenas tardes requiero contactar al sistema de gestión financiera Mattilda'
        />
      </div>

      <div className='card-lg card-border bg-base-100 w-full shadow-sm md:w-lg'>
        <div className='card-body'>
          <h2 className='card-title'>Documentos de apoyo</h2>

          <ul className='space-y-2'>
            <li>
              <a
                href='/que_es_mattilda.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='link link-primary'
              >
                📄 ¿Qué es Mattilda?
              </a>
            </li>

            <li>
              <a
                href='/linea_de_ayuda.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='link link-primary'
              >
                📄 Línea de ayuda
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className='card-lg card-border bg-base-100 w-full shadow-sm md:w-lg'>
        <div className='card-body'>
          <h2 className='card-title'>Videos de apoyo</h2>

          <ul className='space-y-2'>
            <li>
              <a
                href=' https://youtu.be/reV3jo-SPNQ'
                target='_blank'
                rel='noopener noreferrer'
                className='link link-primary'
              >
                ▶️ ¿Qué es Mattilda y cómo funciona?
              </a>
            </li>

            <li>
              <a
                href='https://youtu.be/OJVnB-LRHjk'
                target='_blank'
                rel='noopener noreferrer'
                className='link link-primary'
              >
                ▶️ Estado de cuenta
              </a>
            </li>

            <li>
              <a
                href='https://youtu.be/OCphpm_GM2I'
                target='_blank'
                rel='noopener noreferrer'
                className='link link-primary'
              >
                ▶️ Mattilda bot
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default MattildaInfo
