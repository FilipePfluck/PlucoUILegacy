import * as Checkbox from '@radix-ui/react-checkbox'
import { styled } from '@/styled-system/jsx'
import { cva } from '@/styled-system/css'

export const Root = styled(
  Checkbox.Root,
  cva({
    base: {
      bg: 'componentBg',
      h: '6',
      w: '6',
      rounded: 'md',
      display: 'flex',
      center: 'flex',
      boxShadow: 'sm',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: 'mauve.7',
      transition: '0.2s border-color',
      ring: '2px',

      '&[aria-checked="true"]': {
        borderColor: 'violet.8',
      },
      _ariaInvalid: {
        borderColor: 'red.7',
      },
    },
  }),
)

export const Indicator = styled(
  Checkbox.Indicator,
  cva({
    base: {
      h: '4',
      w: '4',
      rounded: 'sm',
      bg: 'violet.8',
      transition: '0.2s',

      animation: 'check',
    },
  }),
)

export const Label = styled(
  'label',
  cva({
    base: {
      color: 'mauve.11',
      fontSize: '14px',
    },
  }),
)

export const Container = styled(
  'div',
  cva({
    base: {
      display: 'flex',
      alignItems: 'center',
      gap: '2',
    },
  }),
)
