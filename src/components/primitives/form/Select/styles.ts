import * as Select from '@radix-ui/react-select'

import { styled } from '@/styled-system/jsx'
import { css, cva } from '@/styled-system/css'

export const SelectTrigger = styled(
  Select.Trigger,
  cva({
    base: {
      display: 'inline-flex',
      align: 'center',
      justify: 'space-between',
      rounded: 'md',
      px: '4',
      py: '2',
      fontSize: 'sm',
      h: '10',
      gap: '2',
      transition: 'background 0.2s',
      bg: { base: 'componentBg', _hover: 'hoveredComponentBg' },
      color: 'mauve.11',
      '&[data-placeholder]': { color: 'gray.600' },
      boxShadow: 'md',
      borderWidth: '2px',
      borderColor: { base: 'mauve.7', _dataOpen: 'violet.7' },
    },
    variants: {
      width: {
        auto: {},
        sm: { w: '24' },
        md: { w: '40' },
        lg: { w: '64' },
        full: { w: 'full' },
      },
    },
    defaultVariants: {
      width: 'md',
    },
  }),
)

export const SelectViewport = styled(
  Select.Viewport,
  cva({
    base: {
      px: '1',
      h: 'var(--radix-select-content-available-height)',
      maxH: '64',
    },
  }),
)

export const selectContentClassname = cva({
  base: {
    position: 'relative',
    overflow: 'hidden',

    w: 'var(--radix-select-trigger-width)',
    h: 'calc(var(--radix-select-content-available-height) + 48px)',
    // 256px (viewport max height) + 48px (content py)
    maxH: '304px',
    py: '6',

    bg: 'componentBg',
    rounded: 'md',
    boxShadow: 'lg',
    _dataOpen: {
      _top: { animation: 'slideDownAndFadeIn' },
      _right: { animation: 'slideLeftAndFadeIn' },
      _bottom: { animation: 'slideUpAndFadeIn' },
      _left: { animation: 'slideRightAndFadeIn' },
    },
    _dataClosed: {
      _top: { animation: 'slideDownAndFadeOut' },
      _right: { animation: 'slideLeftAndFadeOut' },
      _bottom: { animation: 'slideUpAndFadeOut' },
      _left: { animation: 'slideRightAndFadeOut' },
    },
  },
})

export const SelectItem = styled(
  Select.Item,
  cva({
    base: {
      p: '0px 32px 0 24px',
      fontSize: 'xs',
      color: 'menuText',
      lineHeight: '100%',

      position: 'relative',
      display: 'flex',
      align: 'center',
      rounded: 'sm',
      h: '6',

      userSelect: 'none',
      transition: '0.125s',
      cursor: 'pointer',

      _dataDisabled: {
        color: 'mauve.10',
        pointerEvents: 'none',
      },

      _dataHighlighted: {
        outline: 'none',
        bg: 'highlight',
        color: 'highlightText',
      },
    },
  }),
)

export const SelectLabel = styled(
  Select.Label,
  cva({
    base: {
      px: '6',
      fontSize: 'xs',
      height: '6',
      color: 'mauve.11',
    },
  }),
)

export const SelectSeparator = styled(
  Select.Separator,
  cva({
    base: {
      h: '1px',
      bg: 'separator',
      m: '3',
    },
  }),
)

export const SelectItemIndicator = styled(
  Select.ItemIndicator,
  cva({
    base: {
      position: 'absolute',
      left: '0px',
      width: '6',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }),
)

const baseScrollButtonStyle = css.raw({
  height: '6',
  backgroundColor: 'componentBg',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'violet.11',
  cursor: 'default',
})

export const SelectScrollUpButton = styled(
  Select.ScrollUpButton,
  cva({
    base: {
      ...baseScrollButtonStyle,
      position: 'absolute',
      top: '0px',
      left: '0px',
      right: '0px',
    },
  }),
)

export const SelectScrollDownButton = styled(
  Select.ScrollDownButton,
  cva({
    base: {
      ...baseScrollButtonStyle,
      position: 'absolute',
      bottom: '0px',
      left: '0px',
      right: '0px',
    },
  }),
)

export const RightSlot = styled('div', {
  base: {
    ml: 'auto',
    pl: '5',
    color: 'gray.700',
    fontSize: 'xs',
  },
})
