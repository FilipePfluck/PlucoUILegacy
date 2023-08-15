import * as RadixDialog from '@radix-ui/react-dialog'
import * as RadixAlertDialog from '@radix-ui/react-alert-dialog'
import {
  DialogStyles,
  AlertDialogStyles,
  CloseButton,
  AlertButtonsContainer,
} from './styles'
import { FiX } from 'react-icons/fi'

import { css } from '@/styled-system/css'
import { Scrollable } from '@/components/primitives/Scrollable'
import { IconButton } from '../../buttons/IconButton'
import { Button } from '../../buttons/Button'
import { AlertDialogProps, DialogProps } from './types'

export const Dialog = ({
  children,
  title,
  description,
  type = 'dialog',
  ...props
}: DialogProps | AlertDialogProps) => {
  // alertDialogProps are props that are only available when type is 'alertDialog'
  // otherwise they will be undefined
  let alertDialogProps: AlertDialogProps | undefined
  if (type === 'alertDialog') {
    alertDialogProps = props as AlertDialogProps
  }

  const S = type === 'dialog' ? DialogStyles : AlertDialogStyles

  const Portal =
    type === 'dialog' ? RadixDialog.Portal : RadixAlertDialog.Portal

  return (
    <Portal>
      <S.Overlay />
      <S.Content {...props}>
        {(!!title || type === 'dialog') && (
          <S.Header>
            <S.Title>{title}</S.Title>
            {type === 'dialog' && (
              <CloseButton asChild>
                <IconButton size="lg" aria-label="Close">
                  <FiX />
                </IconButton>
              </CloseButton>
            )}
          </S.Header>
        )}

        <Scrollable
          size="lg"
          borderSize="lg"
          className={css({
            w: 'calc(100% + 8px)',
          })}
        >
          <S.Description>{description}</S.Description>
          {children}
          {type === 'alertDialog' && alertDialogProps && (
            <AlertButtonsContainer>
              <RadixAlertDialog.Cancel asChild>
                <Button
                  size="sm"
                  intent="secondary"
                  onClick={alertDialogProps.onCancelClick}
                >
                  {alertDialogProps.cancelLabel}
                </Button>
              </RadixAlertDialog.Cancel>
              <RadixAlertDialog.Action asChild>
                <Button
                  size="sm"
                  intent={alertDialogProps.actionIntent || 'danger'}
                  onClick={alertDialogProps.onActionClick}
                >
                  {alertDialogProps.actionLabel}
                </Button>
              </RadixAlertDialog.Action>
            </AlertButtonsContainer>
          )}
        </Scrollable>
      </S.Content>
    </Portal>
  )
}
