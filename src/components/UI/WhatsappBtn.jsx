import { WhatsappLogo } from '@/assets/icons'

const WhatsappBtn = ({ numero, mensaje }) => {
  const phoneNumber = numero
  const message =
    mensaje ||
    `Hola buenas tardes, me gustaría recibir más información sobre la escuela Gomez de Mendiola`

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target='_blank'
      rel='noopener noreferrer'
      className='btn flex items-center gap-2 rounded-lg bg-emerald-400 px-4 py-2 text-emerald-950 shadow-md transition-colors hover:bg-emerald-500'
    >
      <WhatsappLogo className='h-8' />
      <span className='font-medium'>Enviar WhatsApp</span>
    </a>
  )
}
export default WhatsappBtn
