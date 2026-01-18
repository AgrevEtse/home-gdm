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

  return (
    <div className='card bg-base-100 w-96 text-center shadow-sm'>
      <figure>
        <img
          src={`/${escolaridad}.png`}
          alt={`${escolaridad} imagen`}
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title justify-center'>{escolaridad}</h2>
        <p className='font-bold'>
          Pago inicial de {formatCurrency.format(pagoInicial)}
        </p>
        <p>Incluye:</p>
        <ul className='list'>
          <li>Inscripción</li>
          <li>Plataforma</li>
          <li>Seguro Escolar</li>
        </ul>
        <p>(Si se paga en julio 2025)</p>
        <p>El costo será de</p>
        <h4 className='text-primary text-3xl font-bold'>
          {formatCurrency.format(costo)}
        </h4>
        <p className='font-bold'>
          10 colegiaturas de {formatCurrency.format(mensualidad)}
        </p>
        <p>Fechas de pago</p>
        <p>de Septiembre 2025 a Junio 2026</p>
        <div className='card-actions justify-end'>
          <Link to={`/${escolaridad.toLowerCase()}`}>
            <button className='btn btn-primary'>Más información </button>
          </Link>
        </div>
        <div className='divider'></div>
        <p className='text-sm'>Atención con Control Escolar de {escolaridad}</p>
        <p className='text-sm font-bold'>{encargado}</p>
      </div>
    </div>
  )
}

export default EscolaridadCard
