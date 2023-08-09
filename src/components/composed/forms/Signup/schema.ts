import { z } from 'zod'

export const messages = {
  nameRequired: 'Username is required',
  emailRequired: 'Email is required',
  emailInvalid: 'Must be a valid email',
  passwordRequired: 'The password must have more than 8 characters',
}

export const registerFormSchema = z.object({
  username: z.string().min(1, { message: messages.nameRequired }),
  email: z.string().min(1, { message: messages.emailRequired }).email({
    message: messages.emailInvalid,
  }),
  password: z.string().min(8, { message: messages.passwordRequired }),
})

export type RegisterFormData = z.infer<typeof registerFormSchema>
