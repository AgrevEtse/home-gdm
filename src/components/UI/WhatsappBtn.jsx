import { MessageSquareDot } from 'lucide-react'

const WhatsAppIcon = () => {
  return (
    <MessageSquareDot
      className='text-green-500'
      size={28}
    />
  )
}

const WhatsappBtn = ({ numero }) => {
  const phoneNumber = numero
  const message = `Hola buenas tardes, me gustaría recibir más información por favor.`

  const sendWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <button
      onClick={sendWhatsApp}
      className='flex items-center gap-2 rounded-lg bg-green-500 px-4 py-2 text-white shadow-md transition hover:bg-green-600'
    >
      <MessageSquareDot size={22} />
      <span className='font-medium'>Enviar WhatsApp</span>
    </button>
  )
}
export default WhatsappBtn
