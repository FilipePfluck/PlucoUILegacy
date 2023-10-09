import { RecipeVariantProps, cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'

const iconButtonStyles = cva({
  base: {
    p: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
      ghost: {
        bg: {
          base: 'transparent',
          _hover: 'mauve.5',
        },
        borderColor: 'transparent',
        color: 'mauve.11',
      },
    },
    rounded: {
      md: {
        rounded: 'md',
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
    intent: 'primary',
    rounded: 'full',
    size: 'md',
  },
})

export type IconButtonVariants = RecipeVariantProps<typeof iconButtonStyles>

export const IconButtonContainer = styled('button', iconButtonStyles)
