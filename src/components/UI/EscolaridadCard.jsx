import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const EscolaridadCard = ({
  escolaridad,
  pagoInicial,
  costo,
  mensualidad,
  encargado
}) => {
  const formatCurrency = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN'
  })

  const icons = {
    Preescolar: '🧸',
    Primaria: '📘',
    Secundaria: '🔬',
    Bachillerato: '🎓'
  }

  return (
    <motion.div
      className='relative p-1'
      whileHover={{ scale: 1.05 }}
      transition={{
        type: 'spring',
        stiffness: 250,
        damping: 18
      }}
    >
      <div className='card bg-base-100 hover:ring-primary w-96 rounded-xl text-center shadow-md transition-all duration-300 hover:shadow-2xl hover:ring-4'>
        <div className='card-body px-6'>
          {/* Título */}
          <h2 className='text-primary text-2xl font-bold uppercase'>
            {escolaridad} {icons[escolaridad]}
          </h2>

          {/* Línea decorativa animada */}
          <motion.div
            className='mx-auto my-2 h-1 w-60 rounded bg-amber-300'
            whileHover={{ width: 120 }}
            transition={{ duration: 0.3 }}
          />

          {/* Imagen */}
          <figure className='pt-6'>
            <img
              src={`/${escolaridad}.png`}
              alt={`${escolaridad} imagen`}
              className='mx-auto w-50 rounded-full shadow-[0_12px_25px_rgba(0,0,0,1.35)]'
            />
          </figure>

          {/* Pago inicial */}
          <p className='mt-4 font-semibold'>Pago inicial desde</p>
          <p className='text-lg font-bold'>
            {formatCurrency.format(pagoInicial)}
          </p>

          {/* Incluye */}
          <div className='mt-4 text-sm'>
            <p className='mb-2 font-semibold'>Incluye:</p>
            <ul className='space-y-1'>
              <li>✓ Inscripción</li>
              <li>✓ Plataforma</li>
              <li>✓ Seguro Escolar</li>
            </ul>
          </div>

          <p className='mt-2 text-xs italic'>(Si se paga en julio 2025)</p>

          {/* Precio principal */}
          <div className='mt-6'>
            <p className='text-sm'>Costo total</p>
            <h4 className='text-primary text-3xl font-extrabold'>
              {formatCurrency.format(costo)}
            </h4>
            <p className='mt-1 text-sm font-semibold'>
              10 colegiaturas de {formatCurrency.format(mensualidad)}
            </p>
          </div>

          {/* Fechas */}
          <p className='mt-3 text-xs text-gray-500'>
            Septiembre 2025 – Junio 2026
          </p>

          {/* Botón */}
          <div className='card-actions mt-6 justify-center'>
            <Link to={`/${escolaridad.toLowerCase()}`}>
              <button className='btn btn-primary px-6'>Más información</button>
            </Link>
          </div>

          {/* Divider */}
          <div className='divider my-4'></div>

          {/* Encargado */}
          <p className='text-xs text-gray-500'>Atención con Control Escolar</p>
          <p className='text-sm font-bold'>{encargado}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default EscolaridadCard
