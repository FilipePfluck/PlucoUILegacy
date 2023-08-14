import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'

export const FormControlContainer = styled(
  'div',
  cva({
    base: {
      display: 'flex',
      flexDir: 'column',
      gap: '2',
      maxW: 'full',
    },
  }),
)

export const FormControlMessageContainer = styled(
  'div',
  cva({
    base: {
      display: 'flex',
    },
  }),
)

export const HelperMessage = styled(
  'p',
  cva({
    base: {
      fontSize: 'xs',
      color: 'mauve.11',
      lineHeight: '100%',
    },
  }),
)

export const ErrorMessage = styled(
  'p',
  cva({
    base: {
      fontSize: 'xs',
      color: 'red.11',
      lineHeight: '100%',
    },
  }),
)
