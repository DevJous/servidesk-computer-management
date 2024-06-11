'use server';

import { signIn } from '@/auth';
import { loginSchema } from '@/lib/validation';
import { z } from 'zod';

type FormData = z.infer<typeof loginSchema>;

export async function SignIn(formData: FormData) {
  return await signIn('credentials', {
    email: formData.email.toLowerCase(),
    password: formData.password,
    callbackUrl: '/dashboard',
  });
}
