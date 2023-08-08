import { ReactNode } from 'react'

import * as S from './styles'
import { SimpleSpread } from '@/types/utils'
import { HTMLStyledProps } from '@/styled-system/jsx'

interface ExtraInputProps {
  icon?: ReactNode
  leftElement?: ReactNode
  rightElement?: ReactNode
  size?: 'sm' | 'md'
  width?: 'auto' | 'sm' | 'md' | 'lg' | 'full'
  roundedCorners?: 'none' | 'right' | 'left' | 'all'
}

type InputProps = SimpleSpread<HTMLStyledProps<'input'>, ExtraInputProps>

export const Input = ({
  icon,
  leftElement,
  rightElement,
  size,
  width,
  ...props
}: InputProps) => {
  return (
    <S.InputContainer size={size} width={width} className="group">
      {icon && <S.InputIcon>{icon}</S.InputIcon>}
      {leftElement}
      <S.Input size={size} {...props} />
      {rightElement}
    </S.InputContainer>
  )
}
