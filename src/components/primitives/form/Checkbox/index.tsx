import { CheckboxProps as RadixCheckboxProps } from '@radix-ui/react-checkbox'
import * as S from './styles'
import { ForwardedRef, forwardRef } from 'react'

interface CheckboxProps extends RadixCheckboxProps {
  id: string
  label: string
}

const CheckboxComponent = (
  { id, label, ...props }: CheckboxProps,
  ref: ForwardedRef<HTMLButtonElement>,
) => {
  return (
    <S.Container>
      <S.Root id={id} aria-labelledby={`${id}-label`} ref={ref} {...props}>
        <S.Indicator />
      </S.Root>
      <S.Label htmlFor={id} id={`${id}-label`}>
        {label}
      </S.Label>
    </S.Container>
  )
}

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  CheckboxComponent,
)
