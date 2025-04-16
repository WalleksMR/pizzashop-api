import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { env } from '@/env'
import * as schema from './schema'

const client = postgres(
  env.DB_URL,
  env.NODE_ENV === 'prod'
    ? {
        ssl: {
          rejectUnauthorized: false,
        },
      }
    : {},
)

export const db = drizzle(client, { schema })
