import * as ContextMenu from '@radix-ui/react-context-menu'

import { styled } from '@/styled-system/jsx'

import {
  menuArrowStyles,
  menuContentStyles,
  menuItemCheckedIndicatorStyles,
  menuItemStyles,
  menuLabelStyles,
  menuRightSlotStyles,
  menuSeparatorStyles,
  subMenuStyles,
} from '../styles'
import { cva } from '@/styled-system/css';

const contentStyles = menuContentStyles

export const ContextMenuTrigger = styled(ContextMenu.Trigger, cva({
  base: {
    border: '2px token(colors.mauve.7) dashed',
    color: 'mauve.12',
    borderRadius: 'lg',
    padding: '12',
    w: '80',
    textAlign: 'center'
  }
}));

export const Content = styled(ContextMenu.Content, contentStyles)
export const SubContent = styled(ContextMenu.SubContent, contentStyles)

export const Arrow = styled(ContextMenu.Arrow, menuArrowStyles)

export const Item = styled(ContextMenu.Item, menuItemStyles)
export const RadioItem = styled(ContextMenu.RadioItem, menuItemStyles)
export const CheckboxItem = styled(ContextMenu.CheckboxItem, menuItemStyles)

export const SubTrigger = styled(ContextMenu.SubTrigger, subMenuStyles)

export const Label = styled(ContextMenu.Label, menuLabelStyles)

export const Separator = styled(ContextMenu.Separator, menuSeparatorStyles)

export const ItemCheckedIndicator = styled(
  ContextMenu.ItemIndicator,
  menuItemCheckedIndicatorStyles,
)

export const RightSlot = styled('div', menuRightSlotStyles)
