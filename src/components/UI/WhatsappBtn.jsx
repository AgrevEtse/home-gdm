import { Link } from 'react-router-dom'

import { WhatsappLogo } from '@/assets/icons'

const WhatsappBtn = ({ numero }) => {
  const phoneNumber = numero
  const message = `Hola buenas tardes, me gustaría recibir más información sobre la escuela Gomez de Mendiola`

  return (
    <Link
      to={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target='_blank'
    >
      <button className='btn flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-emerald-950 shadow-md transition-colors hover:bg-emerald-600'>
        <WhatsappLogo className='h-8' />
        <span className='font-medium'>Enviar WhatsApp</span>
      </button>
    </Link>
  )
}
export default WhatsappBtn
