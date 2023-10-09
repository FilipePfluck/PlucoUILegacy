import * as Context from '@radix-ui/react-context-menu'

import { styled } from '@/styled-system/jsx'
import { cva } from '@/styled-system/css'

export const Trigger = styled(
  Context.Trigger,
  cva({
    base: {
      border: '2px token(colors.mauve.7) dashed',
      color: 'mauve.12',
      borderRadius: 'lg',
      padding: '12',
      w: '80',
      textAlign: 'center',
    },
  }),
)
