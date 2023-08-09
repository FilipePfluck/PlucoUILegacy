'use client'

import { MdLock, MdVisibility, MdVisibilityOff } from 'react-icons/md'
import { Input, InputProps } from '.'
import { ForwardedRef, forwardRef, useState } from 'react'

import * as S from './styles'

const PasswordInputComponent = (
  { ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  const [shouldShowPassowrd, setShouldShowPassword] = useState(false)

  const buttonAriaLabel = shouldShowPassowrd
    ? "Don't show the password"
    : 'Show the password'

  return (
    <Input
      placeholder="Password"
      type={shouldShowPassowrd ? 'text' : 'password'}
      icon={<MdLock />}
      rightElement={
        <S.InputIconButton
          aria-label={buttonAriaLabel}
          onClick={() => setShouldShowPassword((state) => !state)}
        >
          {shouldShowPassowrd ? <MdVisibilityOff /> : <MdVisibility />}
        </S.InputIconButton>
      }
      ref={ref}
      {...props}
    />
  )
}

export const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
  PasswordInputComponent,
)
