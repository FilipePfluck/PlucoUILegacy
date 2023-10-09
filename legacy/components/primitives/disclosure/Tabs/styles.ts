import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'
import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'

export const Root = styled(
  Tabs.Root,
  cva({
    base: {
      display: 'flex',
      flexDir: 'column',
      boxShadow: 'md',
      rounded: 'lg',
      position: 'relative',
    },
  }),
)

export const List = styled(
  Tabs.List,
  cva({
    base: {
      display: 'flex',
      flexShrink: '0',
      borderBottom: '1px solid token(colors.mauve.6)',
    },
  }),
)

export const Trigger = styled(
  Tabs.Trigger,
  cva({
    base: {
      bg: 'componentBg',
      py: '5',
      h: '12',
      display: 'flex',
      flex: '1',
      center: 'flex',
      color: 'mauve.11',
      userSelect: 'none',
      position: 'relative',
      minW: 'max-content',
      w: 'full',
      p: '4',
      _focus: {
        zIndex: '5',
      },
      _firstOfType: {
        borderTopLeftRadius: 'lg',
      },
      _lastOfType: {
        borderTopRightRadius: 'lg',
      },
      '&[data-state="active"]': {
        color: 'violet.11',
      },
      // I only removed this because there is another indicator of focus
      // (the purple line)
      outline: 'none',
    },
    variants: {
      activeIndicator: {
        boxShadow: {
          '&[data-state="active"]': {
            boxShadow: 'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor',
          },
        },
        // the none variant should only be used
        // if you implement another indicator of your own
        none: {},
      },
    },
    defaultVariants: {
      activeIndicator: 'boxShadow',
    },
  }),
)

export const Content = styled(
  Tabs.Content,
  cva({
    base: {
      flexDir: 'column',
      flexGrow: '1',
      p: '5',
      bg: 'componentBg',
      borderBottomRadius: 'lg',
      ring: '2px',
    },
    variants: {
      animated: {
        true: {
          position: 'absolute',
          top: '48px',
          height: '240px',
          w: 'full',
        },
      },
    },
  }),
)

export const Text = styled(
  motion.p,
  cva({
    base: {
      fontSize: '128px',
      textAlign: 'center',
      position: 'absolute',
      // removing the parents padding
      w: 'calc(100% - 40px)',
      zIndex: '5',
      userSelect: 'none',
    },
  }),
)

export const SelectedIndicator = styled(
  motion.div,
  cva({
    base: {
      position: 'absolute',
      bottom: '0',
      height: '2px',
      w: 'full',
      bg: 'violet.9',
      ':focus-visible &': {
        bg: 'indigo.9',
      },
    },
  }),
)
