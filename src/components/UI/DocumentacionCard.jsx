import { Files } from '@/assets/icons'

const DocumentacionCard = () => {
  return (
    <div className='card bg-neutral-content text-neutral w-full items-center justify-center rounded-xl text-center shadow-md md:w-2/3'>
      <div className='card-body'>
        <h2 className='card-title flex items-center gap-2 text-2xl font-bold'>
          <Files className='h-7 w-7 text-neutral-700' />
          Documentación Requerida
        </h2>
        <p className='text-lg'>Al Ingreso se recibe copia de:</p>
        <ul className='space-y-1 text-center'>
          <li className='before:text-error before:content-["❱_"]'>
            Acta de Nacimiento
          </li>
          <li className='before:text-error before:content-["❱_"]'>
            CURP (formato actualizado)
          </li>
          <li className='before:text-error before:content-["❱_"]'>
            Identificación de los Padres (copia por ambos lados)
          </li>
          <li className='before:text-error before:content-["❱_"]'>
            1 Fotografía Blanco y Negro tamaño infantil
          </li>
          <li className='before:text-error before:content-["❱_"]'>
            Comprobante de Domicilio (No mayor a 60 días c/ C.P.)
          </li>
        </ul>
      </div>
    </div>
  )
}

export default DocumentacionCard
