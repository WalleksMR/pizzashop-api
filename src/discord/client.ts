import { env } from '@/env'
import axios from 'axios'

export async function notify(message: string) {
  try {
    await axios.post(env.DISCORD_URL, {
      content: null,
      embeds: [
        {
          title: 'Pizzashop API',
          description: message,
          color: 5814783,
        },
      ],
      attachments: [],
    })
  } catch (err) {
    const error = err as Error
    console.log(`Erro ao notificar o discord`, error.message)
  }
}
