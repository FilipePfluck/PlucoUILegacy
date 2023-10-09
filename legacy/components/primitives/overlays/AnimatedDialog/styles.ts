import * as RadixDialog from '@radix-ui/react-dialog'
import { styled } from '@/styled-system/jsx'
import { cva, css } from '@/styled-system/css'

export * from '../Dialog/styles'

export const AnimatedTrigger = styled(
  RadixDialog.Trigger,
  cva({
    base: {
      bg: 'gray.50',
      rounded: 'lg',
      p: '4',
      boxShadow: 'lg',
      h: '20',
      display: 'flex',
      align: 'center',
    },
  }),
)

export const AnimatedDialogContent = styled(
  RadixDialog.Content,
  cva({
    base: {
      position: 'fixed',
      center: 'absolute',
      outline: 'none',
    },
  }),
)

export const dialogContentStyles = css.raw({
  display: 'flex',
  flexDirection: 'column',
  gap: '4',

  bg: 'componentBg',
  rounded: 'lg',
  boxShadow: 'md',
  p: '6',

  w: '90vw',
  maxW: '450px',
  maxH: '85vh',

  _focus: {
    outline: 'none',
  },
})

export const modalContentStyles = css({
  ...dialogContentStyles,
})

export const modalNameStyles = css({ fontSize: 'xl', fontWeight: 500 })

export const modalDescriptionStyles = css({ fontSize: 'sm', color: 'gray.800' })

export const animatedTriggerStyles = cva({
  base: {
    bg: 'gray.50',
    rounded: 'lg',
    p: '4',
    boxShadow: 'lg',
    h: '20',
    display: 'flex',
    align: 'center',
  },
})
