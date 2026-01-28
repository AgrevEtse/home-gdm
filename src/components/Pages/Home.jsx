import { useState, useEffect } from 'react'

import { cambiarTitulo } from '@/utils/cambiarTitulo'
import EscolaridadCardSkeleton from '@/components/UI/EscolaridadCardSkeleton'
import EscolaridadCard from '@/components/UI/EscolaridadCard'

const API_URL = import.meta.env.VITE_API_URL

const Home = () => {
  const [precios, setPrecios] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchPrecios = async () => {
      try {
        setIsLoading(true)
        const res = await fetch(`${API_URL}/inscripcion/precios`)
        const data = await res.json()

        // TODO: Cuando esté disponible Bachillerato, usar data así de huevos
        setPrecios(data.slice(0, 3))
        setIsLoading(false)
      } catch (error) {
        console.error(error)
      }
    }

    cambiarTitulo('Home')

    fetchPrecios()
  }, [])

  if (isLoading) {
    return (
      // TODO: Cuando esté disponible Bachillerato, ultimo breakpoint cambiar por lg:grid-cols-4
      // TODO: Cuando esté disponible Bachillerato, cambiar tamaño del array por 4
      <div className='grid grid-cols-1 place-items-center gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {Array.from({ length: 3 }).map((_, i) => (
          <EscolaridadCardSkeleton key={i} />
        ))}
      </div>
    )
  }

  return (
    // TODO: Cuando esté disponible Bachillerato, ultimo breakpoint cambiar por lg:grid-cols-4
    <div className='grid grid-cols-1 place-items-center gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {precios.map((precio, i) => (
        <EscolaridadCard
          key={i}
          escolaridad={precio.escolaridad}
          pagoInicial={precio.costo_inicial}
          costoDescuento={precio.costo_descuento}
          mensualidad={precio.costo_mensualidad}
          encargado={precio.nombre_contacto}
        />
      ))}
    </div>
  )
}

export default Home
