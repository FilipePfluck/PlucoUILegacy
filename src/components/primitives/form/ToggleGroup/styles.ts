import * as ToggleGroup from '@radix-ui/react-toggle-group'

import { RecipeVariantProps, cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'
import { toggleStyles } from '../Toggle/styles'

const toggleGroupStyles = cva({
  base: {
    rounded: 'lg',
    w: 'max-content',
    h: 'max-content',
    display: 'flex',
  },
  variants: {
    spacing: {
      tight: {
        gap: '2px',
        bg: 'mauve.8',
        boxShadow: 'md',
      },
      spaced: {
        gap: '4px',
      },
    },
    direction: {
      horizontal: {
        flexDir: 'row',
      },
      vertical: {
        flexDir: 'column',
      },
    },
  },
  defaultVariants: {
    direction: 'horizontal',
  },
})

export const Root = styled(ToggleGroup.Root, toggleGroupStyles)

export type ToggleGroupVariants = RecipeVariantProps<typeof toggleGroupStyles>

export const Item = styled(ToggleGroup.Item, toggleStyles)
