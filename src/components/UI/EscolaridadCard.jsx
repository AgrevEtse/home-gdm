import { Link } from 'react-router-dom'

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
    preescolar: '🧸',
    primaria: '📘',
    secundaria: '🔬',
    bachillerato: '🎓'
  }

  return (
    <div className='card bg-base-100 hover:ring-primary w-96 rounded-xl text-center shadow-md transition-all duration-300 ease-in hover:scale-105 hover:shadow-2xl hover:ring-2'>
      <div className='card-body px-6'>
        {/* Título */}
        <h2 className='text-primary text-2xl font-bold uppercase'>
          {escolaridad.charAt(0).toUpperCase() + escolaridad.slice(1)}{' '}
          {icons[escolaridad]}
        </h2>

        {/* Línea decorativa animada */}
        <div className='bg-secondary mx-auto my-2 h-1 w-30 rounded transition-all hover:w-60' />

        {/* Imagen */}
        <figure className='pt-6'>
          <img
            src={`/${escolaridad}.svg`}
            alt={`${escolaridad} imagen`}
            // shadow-[0_12px_25px_rgba(0,0,0,1.35)]
            className='mx-auto h-40 rounded-full'
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
            <li className='before:text-success before:content-["✓_"]'>
              Inscripción
            </li>
            <li className='before:text-success before:content-["✓_"]'>
              Plataforma
            </li>
            <li className='before:text-success before:content-["✓_"]'>
              Seguro Escolar
            </li>
          </ul>
        </div>

        {/* Precio principal */}
        <div className='mt-6'>
          <p className='text-sm'>Costo con descuento</p>
          <p className='mt-2 text-xs italic'>(Si se paga en julio 2026)</p>
          <h4 className='text-primary text-3xl font-extrabold'>
            {formatCurrency.format(costo)}
          </h4>
          <p className='mt-1 text-sm font-semibold'>
            10 colegiaturas de {formatCurrency.format(mensualidad)}
          </p>
        </div>

        {/* Fechas */}
        <p className='mt-3 text-xs text-gray-500'>
          Septiembre 2026 - Junio 2027
        </p>

        {/* Botón */}
        {/* <div className='card-actions mt-6 justify-center'>
              <Link to={`/${escolaridad.toLowerCase()}`}>
                <button className='btn btn-primary px-6'>Más información</button>
              </Link>
            </div> */}

        {/* Divider */}
        <div className='divider my-4'></div>

        {/* Encargado */}
        <p className='text-xs text-gray-500'>Atención con Control Escolar</p>
        <p className='text-sm font-bold'>{encargado}</p>
      </div>
    </div>
  )
}

export default EscolaridadCard
