import EscolaridadCard from '@/components/UI/EscolaridadCard'

const Home = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
      <EscolaridadCard
        escolaridad='Preescolar'
        pagoInicial={3679.0}
        costo={3053.2}
        mensualidad={1934.0}
        encargado='Profa. Beatriz Araceli'
      />
    </div>
  )
}

export default Home
