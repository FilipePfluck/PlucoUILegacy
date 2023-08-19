import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'
import * as Switch from '@radix-ui/react-switch'

export const Root = styled(
  Switch.Root,
  cva({
    base: {
      width: '10',
      height: '6',
      bg: 'mauve.7',
      rounded: 'full',
      position: 'relative',
      boxShadow: 'sm',
      WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
      ring: '2px',
      '&[data-state="checked"]': { bg: 'violet.8' },
    },
  }),
)

export const Thumb = styled(
  Switch.Thumb,
  cva({
    base: {
      display: 'block',
      width: '5',
      height: '5',
      bg: 'componentBg',
      rounded: 'full',
      boxShadow: `sm`,
      transition: 'transform 100ms',
      transform: 'translateX(2px)',
      '&[data-state="checked"]': { transform: 'translateX(18px)' },
    },
  }),
)
