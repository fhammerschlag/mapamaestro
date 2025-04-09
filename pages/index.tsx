import Head from 'next/head'
import Formulario from '../components/Formulario'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mapa Maestro del Destino</title>
      </Head>
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem' }}>Generá tu Mapa Maestro del Destino</h1>
        <Formulario />
      </main>
    </>
  )
}
