import Head from 'next/head'
import dynamic from 'next/dynamic'

const Formulario = dynamic(() => import('../components/Formulario'), { ssr: false })

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
