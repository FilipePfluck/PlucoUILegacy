import { ToastProps as RadixToastProps } from '@radix-ui/react-toast'
import { ComponentType } from 'react'

export type ToastProps = RadixToastProps & {
  title: string
  description: string
  type?: 'success' | 'info' | 'warning' | 'danger'
  customToast?: ComponentType<ToastProps>
}

export type ToastWithId = ToastProps & {
  id: string
  onClose: (id: string) => void
}
