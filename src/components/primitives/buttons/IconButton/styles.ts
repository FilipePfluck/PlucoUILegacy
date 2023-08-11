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
            _hover: 'hoveredComponentBg',
          },
          color: 'mauve.12',
        },
        gray: {
          bg: {
            base: 'componentBg',
            _hover: 'hoveredComponentBg',
          },
          color: 'violet.11',
          boxShadow: 'md',
        },
        primary: {
          bg: {
            base: 'violet.9',
            _hover: 'violet.10',
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
