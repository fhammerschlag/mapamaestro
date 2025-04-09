'use client'
import { useState } from 'react'

export default function Formulario() {
  const [nombre, setNombre] = useState('')
  const [fecha, setFecha] = useState('')
  const [hora, setHora] = useState('')
  const [lugar, setLugar] = useState('')
  const [resultado, setResultado] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/informe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre, fecha, hora, lugar })
    })
    const data = await res.json()
    setResultado(data.resultado)
  }

  return (
    <>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px', margin: 'auto' }}>
        <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
        <input type="time" value={hora} onChange={(e) => setHora(e.target.value)} />
        <input type="text" placeholder="Lugar de nacimiento" value={lugar} onChange={(e) => setLugar(e.target.value)} />
        <button type="submit">Generar Informe</button>
      </form>
      {resultado && (
        <div style={{ marginTop: '2rem', padding: '1rem', background: '#222' }}>
          <h2>Resultado</h2>
          <pre>{resultado}</pre>
        </div>
      )}
    </>
  )
}
