import { cva, type RecipeVariantProps } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'
import * as Toggle from '@radix-ui/react-toggle'

export const toggleStyles = cva({
  base: {
    bg: 'componentBg',
    color: 'mauve.11',
    display: 'flex',
    center: 'flex',
    transition: 'background 0.2s',

    _dataOn: {
      bg: 'violet.6',
      color: 'violet.12',
    },
    '&[data-state="off"]:hover': { bg: 'hoveredComponentBg' },
  },
  variants: {
    size: {
      sm: {
        h: '6',
        w: '6',
      },
      lg: {
        h: '34px',
        w: '34px',
      },
    },
    orderBasedBorderRadius: {
      false: {
        rounded: 'lg',
        boxShadow: 'md',
      },
      true: {
        '&:first-child': {
          _dataHorizontal: {
            borderLeftRadius: 'lg',
          },
          _dataVertical: {
            borderTopRadius: 'lg',
          },
        },
        '&:last-child': {
          _dataHorizontal: {
            borderRightRadius: 'lg',
          },
          _dataVertical: {
            borderBottomRadius: 'lg',
          },
        },
      },
    },
  },
  defaultVariants: {
    size: 'lg',
    orderBasedBorderRadius: false,
  },
})

export const Root = styled(Toggle.Root, toggleStyles)

export type RootVariants = RecipeVariantProps<typeof toggleStyles>
