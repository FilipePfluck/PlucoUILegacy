import { ReactNode } from 'react'
import {
  DropdownMenuItemProps,
  DropdownMenuItem,
} from '@radix-ui/react-dropdown-menu'
import {
  ContextMenuItemProps,
  ContextMenuItem,
} from '@radix-ui/react-context-menu'
import { cx } from '@/styled-system/css'

import * as S from '../styles'
import { MenuType } from '../types'
import { styled } from '@/styled-system/jsx'

type GenericItem<T extends MenuType> = T extends 'dropdown'
  ? DropdownMenuItemProps
  : ContextMenuItemProps

export type MenuItemProps<T extends MenuType> = {
  type: T
  itemLabel: string
  rightSlot?: ReactNode
} & GenericItem<T>

const DropdownItem = styled(DropdownMenuItem, S.menuItemStyles)
const ContextItem = styled(ContextMenuItem, S.menuItemStyles)
const RightSlot = styled('div', S.menuRightSlotStyles)

export const MenuItem = <T extends MenuType>({
  itemLabel,
  rightSlot,
  className,
  type,
  ...props
}: MenuItemProps<T>) => {
  const itemClassname = cx('menuItem', className)

  const Item = type === 'dropdown' ? DropdownItem : ContextItem

  return (
    <Item className={itemClassname} {...props}>
      {itemLabel}
      {rightSlot && <RightSlot>{rightSlot}</RightSlot>}
    </Item>
  )
}
