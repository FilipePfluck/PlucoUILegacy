import * as S from './styles'

import { ReactElement } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { Flex, HTMLStyledProps } from '@/styled-system/jsx'
import { SimpleSpread } from '@/types/utils'
import { Label } from '../Label'

interface ExtraFormControlProps {
  id: string
  label: string
  isRequired?: boolean
  errorMessage?: string
  helperMessage?: string
  children: ReactElement
}

type FormControlProps = SimpleSpread<
  HTMLStyledProps<'div'>,
  ExtraFormControlProps
>

export const FormControl = ({
  id,
  label,
  isRequired = false,
  errorMessage,
  helperMessage,
  children,
  ...props
}: FormControlProps) => {
  const showHelperMessage = !errorMessage && helperMessage

  const describedByHelperMessage = showHelperMessage
    ? `${id}-helper-message`
    : ''

  const describedByErrorMessage = errorMessage ? `${id}-error-message` : ''

  return (
    <S.FormControlContainer {...props}>
      <Flex w="full" align="center" justify="space-between">
        <Label isRequired={isRequired} htmlFor={`${id}-form-element`}>
          {label}
        </Label>

        <S.FormControlMessageContainer>
          {showHelperMessage && (
            <S.HelperMessage id={`${id}-helper-message`}>
              {helperMessage}
            </S.HelperMessage>
          )}
          {errorMessage && (
            <S.ErrorMessage id={`${id}-error-message`} role="alert">
              {errorMessage}
            </S.ErrorMessage>
          )}
        </S.FormControlMessageContainer>
      </Flex>

      <Slot
        id={`${id}-form-element`}
        aria-required={isRequired}
        aria-invalid={!!errorMessage}
        aria-describedby={`${describedByHelperMessage} ${describedByErrorMessage}`}
      >
        {children}
      </Slot>
    </S.FormControlContainer>
  )
}
