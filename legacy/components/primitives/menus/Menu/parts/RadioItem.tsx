import { ReactNode } from 'react'
import {
  DropdownMenuRadioItemProps,
  DropdownMenuRadioItem,
  DropdownMenuItemIndicator,
} from '@radix-ui/react-dropdown-menu'
import {
  ContextMenuRadioItemProps,
  ContextMenuRadioItem,
  ContextMenuItemIndicator,
} from '@radix-ui/react-context-menu'
import { cx } from '@/styled-system/css'
import { MenuType } from '../types'
import * as S from '../styles'
import { styled } from '@/styled-system/jsx'

type GenericRadioItem<T extends MenuType> = T extends 'dropdown'
  ? DropdownMenuRadioItemProps
  : ContextMenuRadioItemProps

export type RadioItemProps<T extends MenuType> = {
  type: T
  itemLabel: string
  rightSlot?: ReactNode
} & GenericRadioItem<T>

const DropdownRadioItem = styled(DropdownMenuRadioItem, S.menuItemStyles)
const ContextRadioItem = styled(ContextMenuRadioItem, S.menuItemStyles)

const DropdownCheckedItemIndicator = styled(
  DropdownMenuItemIndicator,
  S.menuItemCheckedIndicatorStyles,
)

const ContextCheckedItemIndicator = styled(
  ContextMenuItemIndicator,
  S.menuItemCheckedIndicatorStyles,
)

const RightSlot = styled('div', S.menuRightSlotStyles)

export const RadioItem = <T extends MenuType>({
  itemLabel,
  rightSlot,
  className,
  type,
  ...props
}: RadioItemProps<T>) => {
  const itemClassname = cx('menuItem', className)

  const Item = type === 'dropdown' ? DropdownRadioItem : ContextRadioItem
  const ItemCheckedIndicator =
    type === 'dropdown'
      ? DropdownCheckedItemIndicator
      : ContextCheckedItemIndicator

  return (
    <Item
      className={itemClassname}
      onSelect={(e) => e.preventDefault()}
      {...props}
    >
      <ItemCheckedIndicator>•</ItemCheckedIndicator>
      {itemLabel}
      {rightSlot && <RightSlot>{rightSlot}</RightSlot>}
    </Item>
  )
}
