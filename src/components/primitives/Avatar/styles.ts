import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'
import * as Avatar from '@radix-ui/react-avatar'

export const Root = styled(
  Avatar.Root,
  cva({
    base: {
      display: 'flex',
      center: 'flex',
      overflow: 'hidden',
      userSelect: 'none',
      rounded: 'full',
      boxShadow: 'lg',
    },
    variants: {
      size: {
        sm: {
          h: '6',
          w: '6',
        },
        md: {
          h: '8',
          w: '8',
        },
        lg: {
          h: '12',
          w: '12',
        },
        xl: {
          h: '16',
          w: '16',
        },
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }),
)

export const Image = styled(
  Avatar.Image,
  cva({
    base: {
      w: 'full',
      h: 'full',
      objectFit: 'cover',
      rounded: 'inherit',
    },
  }),
)

export const Fallback = styled(
  Avatar.Fallback,
  cva({
    base: {
      w: 'full',
      h: 'full',
      display: 'flex',
      center: 'flex',
      bg: 'componentBg',
      fontWeight: 500,
    },
  }),
)
