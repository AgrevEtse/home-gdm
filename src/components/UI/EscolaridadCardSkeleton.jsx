const EscolaridadCardSkeleton = () => {
  return (
    <div className='card bg-base-100 w-96 rounded-xl text-center shadow-md'>
      <div className='card-body animate-pulse px-6'>
        {/* Título */}
        <div className='mx-auto h-6 w-40 rounded bg-gray-300'></div>

        {/* Línea decorativa */}
        <div className='mx-auto my-2 h-1 w-32 rounded bg-gray-200'></div>

        {/* Imagen */}
        <figure className='pt-6'>
          <div className='mx-auto h-40 w-40 rounded-full bg-gray-300'></div>
        </figure>

        {/* Pago inicial */}
        <div className='mt-4 space-y-2'>
          <div className='mx-auto h-4 w-28 rounded bg-gray-200'></div>
          <div className='mx-auto h-6 w-24 rounded bg-gray-300'></div>
        </div>

        {/* Incluye */}
        <div className='mt-4'>
          <div className='mx-auto mb-2 h-4 w-20 rounded bg-gray-200'></div>
          <div className='space-y-1'>
            <div className='mx-auto h-3 w-32 rounded bg-gray-200'></div>
            <div className='mx-auto h-3 w-32 rounded bg-gray-200'></div>
            <div className='mx-auto h-3 w-32 rounded bg-gray-200'></div>
          </div>
        </div>

        {/* Precio */}
        <div className='mt-6 space-y-2'>
          <div className='mx-auto h-3 w-28 rounded bg-gray-200'></div>
          <div className='mx-auto h-3 w-36 rounded bg-gray-200'></div>
          <div className='mx-auto h-8 w-32 rounded bg-gray-300'></div>
          <div className='mx-auto h-3 w-40 rounded bg-gray-200'></div>
        </div>

        {/* Fechas */}
        <div className='mx-auto mt-3 h-3 w-36 rounded bg-gray-200'></div>

        {/* Botón */}
        <div className='card-actions mt-6 justify-center'>
          <div className='btn btn-disabled h-10 w-32 border-none bg-gray-300'></div>
        </div>

        {/* Divider */}
        <div className='divider my-4'></div>

        {/* Encargado */}
        <div className='mx-auto h-3 w-28 rounded bg-gray-200'></div>
        <div className='mx-auto h-4 w-20 rounded bg-gray-300'></div>
      </div>
    </div>
  )
}

export default EscolaridadCardSkeleton
