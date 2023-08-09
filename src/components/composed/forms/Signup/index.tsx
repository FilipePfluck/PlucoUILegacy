'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

import { MdLock, MdMail, MdPerson } from 'react-icons/md'

import { Button } from '@/components/primitives/buttons/Button'
import { FormControl } from '@/components/primitives/form/FormControl'
import { Input } from '@/components/primitives/form/Input'

import { css } from '@/styled-system/css'
import { RegisterFormData, registerFormSchema } from './schema'
import { PasswordInput } from '@/components/primitives/form/Input/PasswordInput'
import { Checkbox } from '@/components/primitives/form/Checkbox'

export const Signup = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    mode: 'onBlur',
    resolver: zodResolver(registerFormSchema),
  })

  const onSubmit: SubmitHandler<RegisterFormData> = (data) => console.log(data)

  return (
    <form
      className={css({ w: '80', display: 'flex', flexDir: 'column', gap: '4' })}
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

      <FormControl
        id="confirm-password"
        label="Confirm password"
        isRequired
        errorMessage={errors?.confirmPassword?.message}
      >
        <PasswordInput icon={<MdLock />} {...register('confirmPassword')} />
      </FormControl>

      <Controller
        control={control}
        name="terms"
        render={({ field }) => {
          const { onChange, value, ...rest } = field

          return (
            <FormControl
              id="terms"
              label="Terms of use"
              isRequired
              errorMessage={errors?.terms?.message}
            >
              <Checkbox
                id="terms-of-use-checkbox"
                label="I've read and agree with the terms of use"
                onCheckedChange={(checked) => onChange(checked)}
                checked={value}
                {...rest}
              />
            </FormControl>
          )
        }}
      />

      <Button type="submit" disabled={isSubmitting} full mt="2">
        Sign up
      </Button>
    </form>
  )
}
