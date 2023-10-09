import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'
import * as Slider from '@radix-ui/react-slider'

export const Root = styled(
  Slider.Root,
  cva({
    base: {
      position: 'relative',
      display: 'flex',
      align: 'center',
      userSelect: 'none',
      touchAction: 'none',
      width: '60',
      height: '5',
    },
  }),
)

export const Track = styled(
  Slider.Track,
  cva({
    base: {
      bg: 'mauve.7',
      position: 'relative',
      display: 'flex',
      flexGrow: '1',
      rounded: 'full',
      height: '1',
    },
  }),
)

export const Range = styled(
  Slider.Range,
  cva({
    base: {
      position: 'absolute',
      bg: 'violet.7',
      rounded: 'full',
      height: 'full',
    },
  }),
)

export const Thumb = styled(
  Slider.Thumb,
  cva({
    base: {
      display: 'block',
      width: '4',
      height: '4',
      transition: 'background 0.2s',
      cursor: 'pointer',
      bg: { base: 'violet.9', _hover: 'violet.10' },
      boxShadow: 'sm',
      rounded: 'full',
      outline: 'none',

      // For some reason the ring does not work here
      ring: '2px',
      'body:not(.using-mouse) &': {
        '&:focus-visible': {
          outlineWidth: '2px',
          outlineStyle: 'solid',
          outlineColor: 'token(colors.indigo.8)',
        },
      },
    },
  }),
)
