import * as RadixDialog from '@radix-ui/react-dialog'
import * as RadixAlertDialog from '@radix-ui/react-alert-dialog'

export type DialogType = 'dialog' | 'alertDialog'

export type DialogProps = {
  type?: 'dialog'
  title?: string
  description?: string
} & RadixDialog.DialogContentProps

export type AlertDialogProps = {
  type: 'alertDialog'
  title?: string
  description?: string
  actionLabel: string
  onActionClick: () => void
  cancelLabel: string
  onCancelClick: () => void
  actionIntent?: 'primary' | 'danger'
} & RadixAlertDialog.DialogContentProps
