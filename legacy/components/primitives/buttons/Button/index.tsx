import { ForwardedRef, forwardRef } from 'react'
import * as S from './styles'
import { HTMLStyledProps } from '@/styled-system/jsx'

interface ButtonProps extends HTMLStyledProps<'button'> {
  intent?: 'primary' | 'secondary' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  full?: boolean
}

const ButtonComponent = (
  { children, ...props }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
) => {
  return (
    <S.ButtonContainer ref={ref} {...props}>
      {children}
    </S.ButtonContainer>
  )
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ButtonComponent,
)
