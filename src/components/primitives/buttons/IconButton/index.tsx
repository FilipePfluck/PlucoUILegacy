import { ForwardedRef, forwardRef } from 'react'
import * as S from './styles'
import { HTMLStyledProps } from '@/styled-system/jsx'

interface IconButtonProps extends HTMLStyledProps<'button'> {
  bg?: 'transparent' | 'gray' | 'primary'
  size?: 'md' | 'lg'
  rounded?: 'md' | 'lg' | 'full'
  'aria-label': string
}

const IconButtonComponent = (
  { children, ...props }: IconButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
) => {
  return (
    <S.IconButton ref={ref} {...props}>
      {children}
    </S.IconButton>
  )
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  IconButtonComponent,
)
