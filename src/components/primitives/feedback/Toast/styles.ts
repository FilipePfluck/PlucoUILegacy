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
      bg: 'componentBg',
      rounded: 'lg',
      boxShadow: 'xl',
      padding: '4',
      display: 'grid',
      gridAreas: '"title action" "description action"',
      gridColumns: 'auto max-content',
      columnGap: '4',
      align: 'center',
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
  }),
)

export const Title = styled(
  Toast.Title,
  cva({
    base: {
      gridArea: 'title',
      mb: '1',
      fontWeight: 500,
      color: 'slate.12',
    },
  }),
)

export const Description = styled(
  Toast.Description,
  cva({
    base: {
      gridArea: 'description',
      margin: '0',
      color: 'slate.11',
      textStyle: 'bodySm',
    },
  }),
)

export const Action = styled(
  Toast.Action,
  cva({
    base: {
      gridArea: 'action',
    },
  }),
)
