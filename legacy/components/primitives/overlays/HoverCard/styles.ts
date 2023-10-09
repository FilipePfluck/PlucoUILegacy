import * as HoverCard from '@radix-ui/react-hover-card'

import { styled } from '@/styled-system/jsx'
import { cva } from '@/styled-system/css'
import { slideAnimation } from '@/panda/utils'

export const Content = styled(
  HoverCard.Content,
  cva({
    base: {
      rounded: 'lg',
      p: '5',
      w: '80',
      bg: 'componentBg',
      boxShadow: 'lg',
      ...slideAnimation,
    },
  }),
)

export const Arrow = styled(
  HoverCard.Arrow,
  cva({
    base: {
      fill: 'componentBg',
    },
  }),
)

export const Trigger = styled(
  'a',
  cva({
    base: {
      cursor: 'pointer',
      rounded: 'full',
      ring: '2px',
    },
  }),
)

export const Img = styled(
  'img',
  cva({
    base: {
      rounded: 'full',
    },
    variants: {
      size: {
        md: {
          w: '12',
          h: '12',
        },
        lg: {
          w: '16',
          h: '16',
        },
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }),
)

export const Text = styled(
  'p',
  cva({
    base: {
      m: '0',
      color: 'mauve.12',
      fontSize: 'md',
      lineHeight: 1.5,
    },
    variants: {
      faded: {
        true: { color: 'mauve.11' },
      },
      bold: {
        true: {
          fontWeight: 500,
        },
      },
    },
  }),
)
