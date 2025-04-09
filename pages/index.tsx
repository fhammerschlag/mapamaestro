import Head from 'next/head'
import '../styles/globals.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mapa Maestro del Destino</title>
      </Head>
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem' }}>Bienvenido al Mapa Maestro del Destino</h1>
        <p>Tu viaje interior comienza aquí.</p>
      </main>
    </>
  )
}
