import * as Dropdown from '@radix-ui/react-dropdown-menu'

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

const contentStyles = menuContentStyles

export const Content = styled(Dropdown.Content, contentStyles)
export const SubContent = styled(Dropdown.SubContent, contentStyles)

export const Arrow = styled(Dropdown.Arrow, menuArrowStyles)

export const Item = styled(Dropdown.Item, menuItemStyles)
export const RadioItem = styled(Dropdown.RadioItem, menuItemStyles)
export const CheckboxItem = styled(Dropdown.CheckboxItem, menuItemStyles)

export const SubTrigger = styled(Dropdown.SubTrigger, subMenuStyles)

export const Label = styled(Dropdown.Label, menuLabelStyles)

export const Separator = styled(Dropdown.Separator, menuSeparatorStyles)

export const ItemCheckedIndicator = styled(
  Dropdown.ItemIndicator,
  menuItemCheckedIndicatorStyles,
)

export const RightSlot = styled('div', menuRightSlotStyles)
