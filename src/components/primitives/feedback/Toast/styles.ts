import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'
import * as Toast from '@radix-ui/react-toast'

export const Viewport = styled(
  Toast.Viewport,
  cva({
    base: {
      position: 'fixed',
      bottom: '0',
      right: '0',
      display: 'flex',
      flexDir: 'column',
      gap: '4',
      padding: '6',
      width: '400px',
      maxW: '100vw',
      m: 0,
      listStyle: 'none',
      zIndex: '2147483647',
      outline: 'none',
      transition: '0.2s',
    },
  }),
)

export const Root = styled(
  Toast.Root,
  cva({
    base: {
      position: 'relative',
      rounded: 'lg',
      boxShadow: 'xl',
      padding: '4',
      display: 'flex',
      // flexDir: 'column',
      gap: '2',
      transition: '0.2s',

      _dataOpen: {
        animation: 'slideInToast',
      },

      _dataClosed: {
        animation: 'slideOutToast',
      },

      '&[data-swipe="move"]': {
        transform: 'translateX(var(--radix-toast-swipe-move-x))',
      },
      '&[data-swipe="cancel"]': {
        transform: 'translateX(0)',
        transition: 'transform 200ms ease-out',
      },
      '&[data-swipe="end"]': {
        animation: `swipeOutToast`,
      },
    },
    variants: {
      intent: {
        default: {
          bg: 'componentBg',
        },
        info: {
          bg: 'blue.3',
          bl: '4px solid token(colors.blue.7)',
          color: 'blue.11',
        },
        success: {
          bg: 'green.3',
          bl: '4px solid token(colors.green.7)',
          color: 'green.11',
        },
        warning: {
          bg: 'amber.3',
          bl: '4px solid token(colors.amber.7)',
          color: 'orange.11',
        },
        danger: {
          bg: 'red.3',
          bl: '4px solid token(colors.red.7)',
          color: 'red.11',
        },
      },
    },
    defaultVariants: {
      intent: 'default',
    },
  }),
)

export const Title = styled(
  Toast.Title,
  cva({
    base: {
      mb: '1',
      fontWeight: 500,
      color: 'inherit',
    },
  }),
)

export const Description = styled(
  Toast.Description,
  cva({
    base: {
      margin: '0',
      color: 'slate.11',
      textStyle: 'bodySm',
    },
  }),
)

export const Close = styled(
  Toast.Close,
  cva({
    base: {
      position: 'absolute',
      top: '4',
      right: '4',
      color: 'inherit',
      p: '1',
      rounded: 'full',
    },
  }),
)
