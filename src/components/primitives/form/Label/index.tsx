import { LabelHTMLAttributes } from 'react'

import * as S from './styles'

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  isRequired?: boolean
}

export const Label = ({ children, isRequired, ...props }: LabelProps) => {
  return (
    <S.LabelContainer {...props}>
      {children}
      {isRequired && (
        <S.LabelRequiredIndicator aria-hidden>*</S.LabelRequiredIndicator>
      )}
    </S.LabelContainer>
  )
}
