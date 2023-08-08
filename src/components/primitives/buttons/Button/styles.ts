import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'

export const ButtonContainer = styled(
  'button',
  cva({
    base: {
      display: 'flex',
      center: 'flex',
      rounded: 'md',
      borderWidth: '1px',
      borderStyle: 'solid',
      transition: 'background 0.2s',
      cursor: 'pointer',
    },
    variants: {
      intent: {
        primary: {
          bg: {
            base: 'purple.9',
            _hover: 'purple.10',
          },
          borderColor: {
            base: 'purple.6',
            _hover: 'puprle.7',
          },
          color: 'white',
        },
        secondary: {
          bg: {
            base: 'transparent',
            _hover: 'purple.9',
          },
          borderColor: 'purple.9',
          color: {
            base: 'purple.9',
            _hover: 'white',
          },
        },
      },

      size: {
        sm: {
          p: '2',
          gap: '2',
          fontSize: 'sm',
        },
        md: {
          p: '3',
          gap: '3',
          fontSize: 'md',
        },
        lg: {
          p: '4',
          gap: '4',
          fontSize: 'lg',
        },
      },

      full: {
        true: {
          w: 'full',
        },
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'md',
    },
  }),
)
