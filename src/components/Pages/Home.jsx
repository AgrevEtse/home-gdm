import EscolaridadCard from '@/components/UI/EscolaridadCard'

const Home = () => {
  return (
    <div className='grid grid-cols-1 place-items-center gap-4 md:grid-cols-2 lg:grid-cols-3'>
      <EscolaridadCard
        escolaridad='preescolar'
        pagoInicial={3916}
        costo={3087}
        mensualidad={2050}
        encargado='Profa. Beatriz Araceli'
      />

      <EscolaridadCard
        escolaridad='primaria'
        pagoInicial={3916}
        costo={3087}
        mensualidad={2550}
        encargado='Claudia Nuño'
      />

      <EscolaridadCard
        escolaridad='secundaria'
        pagoInicial={6384}
        costo={4938}
        mensualidad={3185}
        encargado='Esperanza Monserrat'
      />
    </div>
  )
}

export default Home
