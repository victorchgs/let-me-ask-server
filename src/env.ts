import { z } from "zod"

const envSchema = z.object({
  // biome-ignore lint/style/noMagicNumbers: default port
  PORT: z.coerce.number().default(3333),
  DATABASE_URL: z.url().startsWith("postgresql://"),
})

export const env = envSchema.parse(process.env)
