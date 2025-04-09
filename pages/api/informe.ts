import { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { nombre, fecha, hora, lugar } = req.body

  const prompt = `Generá un informe espiritual profundo como si fueras un sabio, basado en estos datos:
Nombre: ${nombre}
Fecha de nacimiento: ${fecha}
Hora: ${hora}
Lugar: ${lugar}
No incluyas rituales ni piedras. Enfocate en propósito, destino, aprendizajes, potenciales ocultos y conexión con el alma.`

  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }],
    })

    const resultado = completion.data.choices[0].message?.content || ''
    res.status(200).json({ resultado })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error generando el informe' })
  }
}
