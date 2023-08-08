import * as S from './styles'

import React, { ReactElement } from 'react'
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
  messageContainerHeight?: 'fixed' | 'auto'
  direction?: 'column' | 'row'
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
  messageContainerHeight,
  direction,
  ...props
}: FormControlProps) => {
  return (
    <S.FormControlContainer direction={direction} {...props}>
      <Label isRequired={isRequired} htmlFor={`${id}-form-element`}>
        {label}
      </Label>
      <Flex direction="column" gap="2" maxW="full">
        {React.createElement(children.type, {
          ...{
            ...children.props,
            id: `${id}-form-element`,
            'aria-required': isRequired,
            'aria-invalid': !!errorMessage,
            'aria-describedby': `${id}-helper-message ${id}-error-message`,
          },
        })}
        <S.FormControlMessageContainer height={messageContainerHeight}>
          {!errorMessage && helperMessage && (
            <S.HelperMessage id={`${id}-helper-message`}>
              {helperMessage}
            </S.HelperMessage>
          )}
          {errorMessage && (
            <S.ErrorMessage id={`${id}-error-message`}>
              {errorMessage}
            </S.ErrorMessage>
          )}
        </S.FormControlMessageContainer>
      </Flex>
    </S.FormControlContainer>
  )
}
