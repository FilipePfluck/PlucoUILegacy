import { z } from 'zod'

export const registerFormSchema = z.object({
  username: z.string().min(1, { message: 'Username is required' }),
  email: z.string().min(1, { message: 'Email is required' }).email({
    message: 'Must be a valid email',
  }),
  password: z
    .string()
    .min(8, { message: 'The password must have more than 8 characters' }),
})

export type RegisterFormData = z.infer<typeof registerFormSchema>
