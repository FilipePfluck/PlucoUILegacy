import * as Collapsible from '@radix-ui/react-collapsible'

import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'

export const FruitGrid = styled(
  'div',
  cva({
    base: {
      display: 'grid',
      gridTemplateColumns: {
        base: '1fr',
        sm: '1fr 1fr',
        lg: 'repeat(4, 1fr)',
      },
      gap: '4',
    },
  }),
)

export const FruitCard = styled(
  'div',
  cva({
    base: {
      fontSize: '72px',
      p: '8',
      rounded: 'xl',
      bg: 'componentBg',
      boxShadow: 'lg',

      opacity: 0,
      animationFillMode: 'forwards',
      animationName: 'fadeInAndScale',
      animationDuration: '0.25s',
      animationDelay: {
        base: 'var(--delay-base)',
        md: 'var(--delay-md)',
        lg: 'var(--delay-lg)',
      },
    },
  }),
)

export const CollapsibleContent = styled(
  Collapsible.Content,
  cva({
    base: {
      pb: '2',
      overflow: 'hidden',
      "&[data-state='open']": {
        animation: 'expand',
      },
      "&[data-state='closed']": {
        animation: 'collapse',
      },
    },
  }),
)

export const CollapsibleDivider = styled(
  'div',
  cva({
    base: {
      h: '2px',
      w: 'full',
      bg: 'slate.7',
    },
  }),
)
