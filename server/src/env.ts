import z from "zod";

const envSchema = z.object({
    DATABASE_URL: z.string().url(),
})

export const env = envSchema.parse(process.env)
// verificando se o database_url no .env é uma string e uma url antes de exportar