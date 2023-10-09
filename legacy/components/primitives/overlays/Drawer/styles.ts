import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(
  Dialog.Overlay,
  cva({
    base: {
      bg: 'rgb(0, 0, 0, 0.25)',
      position: 'fixed',
      inset: '0px',
      _dataOpen: {
        animation: 'fadeIn',
      },
      _dataClosed: {
        animation: 'fadeOut',
      },
    },
  }),
)

export const Content = styled(
  Dialog.Content,
  cva({
    base: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4',
      backgroundColor: 'componentBg',
      boxShadow: 'lg',
      position: 'fixed',
      p: '6',
      top: 0,
      bottom: 0,
      width: 'var(--drawer-size)',

      _focus: {
        outline: 'none',
      },
      _dataOpen: {
        animation: 'drawerSlideIn',
      },
      _dataClosed: {
        animation: 'drawerSlideOut',
      },
    },
    variants: {
      side: {
        top: {
          left: 0,
          right: 0,
          w: '100%',
          height: 'var(--drawer-size)',
          bottom: 'auto',
          '--drawer-transform': 'translate3d(0,-100%,0)',
        },
        right: {
          right: 0,
          '--drawer-transform': 'translate3d(100%,0,0)',
        },
        bottom: {
          left: 0,
          right: 0,
          w: '100%',
          height: 'var(--drawer-size)',
          top: 'auto',
          '--drawer-transform': 'translate3d(0,100%,0)',
        },
        left: {
          left: 0,
          '--drawer-transform': 'translate3d(-100%,0,0)',
        },
      },
      size: {
        sm: {
          '--drawer-size': '240px',
        },
        md: {
          '--drawer-size': '320px',
        },
        lg: {
          '--drawer-size': '480px',
        },
      },
    },
    defaultVariants: {
      side: 'right',
      size: 'md',
    },
  }),
)

export const Header = styled(
  'header',
  cva({
    base: {
      w: 'full',
      display: 'flex',
      align: 'center',
      justify: 'space-between',
      gap: '2',
    },
  }),
)

export const Title = styled(
  Dialog.Title,
  cva({
    base: {
      fontWeight: 500,
      color: 'mauve.12',
      fontSize: 'lg',
    },
  }),
)

export const Description = styled(
  Dialog.Description,
  cva({
    base: {
      color: 'mauve.11',
    },
  }),
)
