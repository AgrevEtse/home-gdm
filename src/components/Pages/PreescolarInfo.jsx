import { useEffect } from 'react'

import DocumentacionCard from '@/components/UI/DocumentacionCard'
import { BookOpen, Heart, Users, Monitor } from '@/assets/icons'
import { cambiarTitulo } from '@/utils/cambiarTitulo'

const PreescolarInfo = () => {
  useEffect(() => {
    cambiarTitulo('Preescolar')
  }, [])

  return (
    <section className='bg-base-100 flex flex-col items-center justify-center space-y-12 px-6 py-16'>
      {/* Header */}
      <div className='mx-auto max-w-5xl text-center'>
        <h1 className='text-primary text-4xl font-extrabold uppercase'>
          Preescolar 🧸
        </h1>
        <div className='bg-secondary mx-auto my-4 h-1 w-32 rounded' />
        <p className='text-lg text-gray-600'>
          Formación académica y humana basada en valores catolóticos
        </p>
      </div>

      <DocumentacionCard />

      {/* Grid principal */}
      <div className='mx-auto grid max-w-6xl gap-8 md:grid-cols-2'>
        {/* Formación Académica */}
        <div className='card bg-base-100 rounded-xl p-8 shadow-md'>
          <h2 className='text-primary mb-3 flex items-center gap-2 text-2xl font-bold'>
            <BookOpen className='h-7 w-7 text-blue-700' />
            Formación Académica
          </h2>
          <ul className='mt-4 space-y-2 text-sm text-gray-600'>
            <li className='before:text-success before:content-["✓_"]'>
              Lectura y comprensión lectora
            </li>
            <li className='before:text-success before:content-["✓_"]'>
              Matemáticas y pensamiento lógico
            </li>
            <li className='before:text-success before:content-["✓_"]'>
              Ciencias naturales
            </li>
            <li className='before:text-success before:content-["✓_"]'>
              Introducción a la tecnología
            </li>
            <li className='before:text-success before:content-["✓_"]'>
              Inglés
            </li>
          </ul>
        </div>

        {/* Formación en Valores */}
        <div className='card bg-base-100 rounded-xl p-8 shadow-md'>
          <h2 className='text-primary mb-3 flex items-center gap-2 text-2xl font-bold'>
            <Heart className='h-7 w-7 text-amber-800' />
            Formación en Valores
          </h2>
          <p className='mt-4 text-sm text-gray-600'>
            Promovemos el respeto, la responsabilidad y la solidaridad,
            fortaleciendo la fe y el desarrollo humano de nuestros alumnos.
          </p>
        </div>

        {/* Actividades */}
        <div className='card bg-base-100 rounded-xl p-8 shadow-md'>
          <h2 className='text-primary mb-3 flex items-center gap-2 text-2xl font-bold'>
            <Users className='h-7 w-7 text-violet-700' />
            Actividades Complementarias
          </h2>
          <ul className='mt-4 space-y-2 text-sm text-gray-600'>
            <li className='before:text-success before:content-["✓_"]'>
              Educación física
            </li>
            <li className='before:text-success before:content-["✓_"]'>
              Eventos culturales y cívicos
            </li>
            <li className='before:text-success before:content-["✓_"]'>
              Actividades religiosas
            </li>
            <li className='before:text-success before:content-["✓_"]'>
              Trabajo colaborativo
            </li>
          </ul>
        </div>

        {/* Acompañamiento */}
        <div className='card bg-base-100 rounded-xl p-8 shadow-md'>
          <h2 className='text-primary mb-3 flex items-center gap-2 text-2xl font-bold'>
            <Monitor className='h-7 w-7 text-stone-700' />
            Acompañamiento Escolar
          </h2>
          <p className='mt-4 text-sm text-gray-600'>
            Contamos con seguimiento académico, comunicación constante con los
            padres y uso de plataforma educativa.
          </p>
        </div>
      </div>

      {/* Cierre */}
      <div className='bg-base-200 mx-auto max-w-3xl rounded-xl p-8 text-center shadow-inner'>
        <p className='text-sm text-gray-600 italic'>
          “La educación en el preescolar es la base para formar personas
          íntegras, responsables y comprometidas con su comunidad.”
        </p>
      </div>
    </section>
  )
}

export default PreescolarInfo
