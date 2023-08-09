import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'

export const IconButton = styled(
  'button',
  cva({
    base: {
      p: '1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    variants: {
      bg: {
        transparent: {
          bg: {
            base: 'transparent',
            _hover: 'mauve.4',
          },
          color: 'mauve.12',
        },
        gray: {
          bg: {
            base: 'mauve.3',
            _hover: 'mauve.4',
          },
          color: 'purple.11',
          boxShadow: 'md',
        },
        primary: {
          bg: {
            base: 'purple.9',
            _hover: 'purple.10',
          },
          color: 'white',
        },
      },
      rounded: {
        md: {
          rounded: 'md',
        },
        lg: {
          rounded: 'lg',
        },
        full: {
          rounded: 'full',
        },
      },
      size: {
        md: {
          p: '1',
          fontSize: 'md',
        },
        lg: {
          p: '2',
          fontSize: 'lg',
        },
      },
    },
    defaultVariants: {
      bg: 'transparent',
      rounded: 'full',
      size: 'md',
    },
  }),
)
