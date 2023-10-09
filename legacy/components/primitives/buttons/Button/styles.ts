import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'

export const ButtonContainer = styled(
  'button',
  cva({
    base: {
      display: 'flex',
      center: 'flex',
      rounded: 'md',
      transition: 'background 0.2s',
      cursor: 'pointer',
      borderWidth: '2px',
      borderStyle: 'solid',
    },
    variants: {
      intent: {
        primary: {
          bg: {
            base: 'violet.9',
            _hover: 'violet.10',
          },
          color: 'white',
          borderColor: {
            base: 'violet.9',
            _hover: 'violet.10',
          },
        },
        secondary: {
          bg: {
            base: 'mauve.4',
            _hover: 'mauve.5',
          },
          borderColor: 'mauve.7',
          color: 'mauve.11',
        },
        danger: {
          bg: {
            base: 'red.4',
            _hover: 'red.5',
          },
          borderColor: 'red.7',
          color: 'red.11',
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
        false: {
          w: 'max-content',
        },
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'md',
      full: false,
    },
  }),
)
