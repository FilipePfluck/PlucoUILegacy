import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'
import * as Progress from '@radix-ui/react-progress'

export const Root = styled(
  Progress.Root,
  cva({
    base: {
      position: 'relative',
      overflow: 'hidden',
      background: 'componentBg',
      boxShadow: 'md',
      borderRadius: 'full',
      width: '300px',
      height: '6',
    },
  }),
)

export const Indicator = styled(
  Progress.Indicator,
  cva({
    base: {
      bg: 'violet.9',
      w: 'full',
      h: 'full',
      transition: 'transform 660ms cubic-bezier(0.65, 0, 0.35, 1)',
    },
  }),
)
