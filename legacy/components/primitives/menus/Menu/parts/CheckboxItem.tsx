import { ReactNode } from 'react'
import {
  DropdownMenuCheckboxItemProps,
  DropdownMenuCheckboxItem,
  DropdownMenuItemIndicator,
} from '@radix-ui/react-dropdown-menu'
import {
  ContextMenuCheckboxItemProps,
  ContextMenuCheckboxItem,
  ContextMenuItemIndicator,
} from '@radix-ui/react-context-menu'
import { MdCheck } from 'react-icons/md'
import { cx } from '@/styled-system/css'
import { MenuType } from '../types'
import * as S from '../styles'
import { styled } from '@/styled-system/jsx'

type GenericCheckboxItem<T extends MenuType> = T extends 'dropdown'
  ? DropdownMenuCheckboxItemProps
  : ContextMenuCheckboxItemProps

export type CheckboxItemProps<T extends MenuType> = {
  type: T
  itemLabel: string
  rightSlot?: ReactNode
} & GenericCheckboxItem<T>

const DropdownCheckboxItem = styled(DropdownMenuCheckboxItem, S.menuItemStyles)
const ContextCheckboxItem = styled(ContextMenuCheckboxItem, S.menuItemStyles)

const DropdownCheckedItemIndicator = styled(
  DropdownMenuItemIndicator,
  S.menuItemCheckedIndicatorStyles,
)

const ContextCheckedItemIndicator = styled(
  ContextMenuItemIndicator,
  S.menuItemCheckedIndicatorStyles,
)

const RightSlot = styled('div', S.menuRightSlotStyles)

export const CheckboxItem = <T extends MenuType>({
  itemLabel,
  rightSlot,
  className,
  type,
  ...props
}: CheckboxItemProps<T>) => {
  const itemClassname = cx('menuItem', className)

  const Item = type === 'dropdown' ? DropdownCheckboxItem : ContextCheckboxItem
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
      <ItemCheckedIndicator>
        <MdCheck />
      </ItemCheckedIndicator>
      {itemLabel}
      {rightSlot && <RightSlot>{rightSlot}</RightSlot>}
    </Item>
  )
}
