import { ToastProps as RadixToastProps } from '@radix-ui/react-toast'
import { ComponentType } from 'react'

export type ToastProps = {
  title: string
  description: string
  intent?: 'success' | 'info' | 'warning' | 'danger'
  customToast?: ComponentType<ToastProps>
  withIcon?: boolean
} & RadixToastProps

export type ToastWithId = ToastProps & {
  id: string
  onClose: (id: string) => void
}
