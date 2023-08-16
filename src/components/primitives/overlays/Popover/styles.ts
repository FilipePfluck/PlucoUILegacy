import * as Popover from '@radix-ui/react-popover'

import { cva } from '@/styled-system/css'
import { menuContentBaseStyles, slideAnimation } from '@/panda/utils'
import { styled } from '@/styled-system/jsx'

export const Content = styled(
  Popover.Content,
  cva({
    base: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4',
      p: '6',
      maxH: '85vh',

      ...menuContentBaseStyles,
      ...slideAnimation,
    },
    variants: {
      width: {
        auto: {},
        sm: { w: '32' },
        md: { w: '64' },
        lg: { w: '80' },
        full: { w: 'full' },
      },
    },
    defaultVariants: {
      width: 'md',
    },
  }),
)

export const Arrow = styled(
  Popover.Arrow,
  cva({
    base: {
      fill: 'componentBg',
    },
  }),
)

export const CloseButton = styled(
  Popover.Close,
  cva({
    base: {
      position: 'absolute',
      top: '16px',
      right: '16px',
    },
  }),
)
