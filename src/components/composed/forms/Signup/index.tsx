import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'

import { MdLock, MdMail, MdPerson } from 'react-icons/md'

import { Button } from '@/components/primitives/buttons/Button'
import { FormControl } from '@/components/primitives/form/FormControl'
import { Input } from '@/components/primitives/form/Input'

import { css } from '@/styled-system/css'
import { RegisterFormData, registerFormSchema } from './schema'
import { PasswordInput } from '@/components/primitives/form/Input/PasswordInput'

export const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    mode: 'onBlur',
    resolver: zodResolver(registerFormSchema),
  })

  const onSubmit: SubmitHandler<RegisterFormData> = (data) => console.log(data)

  return (
    <form
      className={css({ w: '80', display: 'flex', flexDir: 'column', gap: '2' })}
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormControl
        id="username"
        label="Username"
        isRequired
        errorMessage={errors?.username?.message}
      >
        <Input
          placeholder="JoeDoe"
          icon={<MdPerson />}
          {...register('username')}
        />
      </FormControl>

      <FormControl
        id="email"
        label="E-mail"
        isRequired
        errorMessage={errors?.email?.message}
      >
        <Input
          placeholder="joedoe@gmail.com"
          icon={<MdMail />}
          {...register('email')}
        />
      </FormControl>

      <FormControl
        id="password"
        label="Password"
        isRequired
        errorMessage={errors?.password?.message}
      >
        <PasswordInput icon={<MdLock />} {...register('password')} />
      </FormControl>

      <Button type="submit" disabled={isSubmitting} full>
        Sign up
      </Button>
    </form>
  )
}
