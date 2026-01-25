const QuienesSomos = () => {
  return (
    <section className='bg-base-100 px-6 py-16'>
      {/* Header */}
      <div className='mx-auto max-w-5xl text-center'>
        <h1 className='text-primary text-4xl font-extrabold uppercase'>
          ¿Quiénes Somos?
        </h1>
        <div className='bg-secondary mx-auto my-4 h-1 w-32 rounded' />
        <p className='text-lg text-gray-600'>
          Colegio Católico Gómez de Mendiola
        </p>
      </div>

      {/* Cards */}
      <div className='mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-3'>
        {/* Misión */}
        <div className='card bg-base-100 rounded-xl p-6 text-center shadow-md transition-all hover:scale-105 hover:shadow-xl'>
          <h3 className='text-primary mb-2 text-2xl font-bold'>🎯 Misión</h3>
          <div className='bg-secondary mx-auto mb-4 h-1 w-20 rounded' />
          <p className='text-sm text-gray-600'>
            Formar integralmente a nuestros alumnos con excelencia académica,
            valores cristianos y un profundo sentido humano, guiados por la fe
            católica.
          </p>
        </div>

        {/* Visión */}
        <div className='card bg-base-100 rounded-xl p-6 text-center shadow-md transition-all hover:scale-105 hover:shadow-xl'>
          <h3 className='text-primary mb-2 text-2xl font-bold'>👁️ Visión</h3>
          <div className='bg-secondary mx-auto mb-4 h-1 w-20 rounded' />
          <p className='text-sm text-gray-600'>
            Ser una institución educativa reconocida por su calidad académica,
            formación en valores y compromiso con la comunidad.
          </p>
        </div>

        {/* Valores */}
        <div className='card bg-base-100 rounded-xl p-6 text-center shadow-md transition-all hover:scale-105 hover:shadow-xl'>
          <h3 className='text-primary mb-2 text-2xl font-bold'>❤️ Valores</h3>
          <div className='bg-secondary mx-auto mb-4 h-1 w-20 rounded' />
          <ul className='space-y-1 text-sm text-gray-600'>
            <li>✓ Fe</li>
            <li>✓ Respeto</li>
            <li>✓ Responsabilidad</li>
            <li>✓ Solidaridad</li>
            <li>✓ Honestidad</li>
          </ul>
        </div>
      </div>

      {/* Identidad Católica */}
      <div className='bg-base-200 mx-auto mt-20 max-w-4xl rounded-xl p-8 text-center shadow-inner'>
        <h2 className='text-primary mb-3 text-3xl font-bold'>
          ✝️ Identidad Católica
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

export default QuienesSomos
