import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import * as RadixToast from '@radix-ui/react-toast'

import { Viewport } from './styles'
import { ToastProps, ToastWithId } from './types'
import { Toast } from '.'

interface ToastContextProps {
  toast: (props: ToastProps) => void
}

const ToastContext = createContext({} as ToastContextProps)

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<ToastWithId[]>([])
  const timeoutsRef = useRef<number[]>([])

  useEffect(() => {
    return () => {
      // Here eslint is warning that the ref .current could have changed
      // since the last time this effect has run, but his is actually what I want
      // so I'm disabling this warning
      // eslint-disable-next-line
      timeoutsRef.current.forEach(clearTimeout)
    }
  }, [])

  const removeToast = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
  }

  const closeToast = (id: string) => {
    setToasts((state) => {
      return state.map((toast) => {
        if (toast.id === id) {
          return {
            ...toast,
            open: false,
          }
        }
        return toast
      })
    })

    // wait until the animation finishes
    const timeoutId = window.setTimeout(() => removeToast(id), 250)
    timeoutsRef.current.push(timeoutId)
  }

  const toast = (props: ToastProps) => {
    const id = Date.now()
    setToasts([...toasts, { id: String(id), onClose: closeToast, ...props }])
  }

  return (
    <ToastContext.Provider value={{ toast }}>
      <RadixToast.Provider swipeDirection="right">
        {children}
        {toasts.map((toast) => {
          const ToastComponent = toast.customToast || Toast

          return <ToastComponent key={toast.id} {...toast} />
        })}
        <Viewport />
      </RadixToast.Provider>
    </ToastContext.Provider>
  )
}

export const useToast = () => {
  const context = useContext(ToastContext)

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}
