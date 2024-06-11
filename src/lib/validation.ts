import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email({ message: 'Email inválido' }),
  password: z
    .string()
    .min(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
    .regex(/[a-z]/, { message: 'La contraseña debe tener una letra minúscula' })
    .regex(/[A-Z]/, { message: 'La contraseña debe tener una letra mayúscula' })
    .regex(/[0-9]/, { message: 'La contraseña debe tener un número' }),
});
