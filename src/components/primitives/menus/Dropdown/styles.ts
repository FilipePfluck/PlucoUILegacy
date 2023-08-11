import * as Dropdown from '@radix-ui/react-dropdown-menu'

import { styled } from '@/styled-system/jsx'
import { css, cva } from '@/styled-system/css'

const contentStyles = cva({
  base: {
    px: '1',
    py: '2',
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

  variants: {
    width: {
      auto: {},
      sm: { minW: '32' },
      md: { minW: '48' },
      lg: { minW: '64' },
    },
    itemPaddingLeft: {
      none: {},
      md: {
        '& .dropdownItem': {
          pl: '6',
        },
      },
    },
  },
  defaultVariants: {
    width: 'auto',
    itemPaddingLeft: 'none',
  },
})

export const Content = styled(Dropdown.Content, contentStyles)
export const SubContent = styled(Dropdown.SubContent, contentStyles)

export const Arrow = styled(
  Dropdown.Arrow,
  cva({
    base: {
      fill: 'componentBg',
    },
  }),
)

const itemBaseStyles = css.raw({
  all: 'unset',
  px: '1',
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
})

export const Item = styled(
  Dropdown.Item,
  cva({
    base: itemBaseStyles,
  }),
)
export const RadioItem = styled(
  Dropdown.RadioItem,
  cva({
    base: itemBaseStyles,
  }),
)
export const CheckboxItem = styled(
  Dropdown.CheckboxItem,
  cva({
    base: itemBaseStyles,
  }),
)

export const SubTrigger = styled(
  Dropdown.SubTrigger,
  cva({
    base: {
      ...itemBaseStyles,
      // when the submenu is opened,
      // but the trigger is not highlighted
      _dataOpen: {
        '&:not([data-highlighted])': {
          bg: 'subtleHightlight',
          color: 'menuText',
        },
      },
    },
  }),
)

export const Label = styled(
  Dropdown.Label,
  cva({
    base: {
      pl: '6',
      fontSize: 'xs',
      lineHeight: '200%',
      color: 'mauve.12',
    },
  }),
)

export const Separator = styled(
  Dropdown.Separator,
  cva({
    base: {
      h: '1px',
      m: '1',
      bg: 'separator',
    },
  }),
)

export const ItemCheckedIndicator = styled(
  Dropdown.ItemIndicator,
  cva({
    base: {
      display: 'flex',
      justifyContent: 'center',
      position: 'absolute',
      left: '0px',
      w: '6',
    },
  }),
)

export const RightSlot = styled(
  'div',
  cva({
    base: {
      ml: 'auto',
      pl: '5',
      color: 'mauve.11',
      fontSize: 'xs',

      '[data-highlighted] &': {
        color: 'highlightText',
      },

      '[data-disabled] &': { color: 'mauve.10' },
    },
  }),
)
