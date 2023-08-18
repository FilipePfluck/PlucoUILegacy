import * as Accordion from '@radix-ui/react-accordion'
import { styled } from '@/styled-system/jsx'
import { cva } from '@/styled-system/css'

export const Root = styled(
  Accordion.Root,
  cva({
    base: {
      rounded: 'md',
      width: '80',
      bg: 'mauve.6',
      boxShadow: 'lg',
    },
  }),
)

export const Item = styled(
  Accordion.Item,
  cva({
    base: {
      overflow: 'hidden',
      mt: '1px',
      _first: {
        roundedTop: 'md',
        mt: '0px',
      },
      _last: {
        roundedBottom: 'md',
      },
      _focusVisibleWithin: {
        zIndex: '2',
        ring: '2px',
      },
    },
  }),
)

export const Header = styled(
  Accordion.Header,
  cva({
    base: {
      all: 'unset',
      display: 'flex',
    },
  }),
)

export const Trigger = styled(
  Accordion.Trigger,
  cva({
    base: {
      all: 'unset',
      cursor: 'pointer',
      bg: 'componentBg',
      p: '4',
      w: 'full',
      h: '10',
      flex: 1,
      display: 'flex',
      align: 'center',
      justify: 'space-between',
      color: 'mauve.12',
      fontWeight: 'bold',
      boxShadow: 'md',
    },
  }),
)

export const Content = styled(
  Accordion.Content,
  cva({
    base: {
      color: 'mauve.11',
      bg: 'hoveredComponentBg',
      overflow: 'hidden',

      '&> div': {
        p: '4',
      },

      _dataOpen: {
        animation: 'accordionSlideDown',
      },

      _dataClosed: {
        animation: 'accordionSlideUp',
      },
    },
  }),
)
