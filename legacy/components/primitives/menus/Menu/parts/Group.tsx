import {
  DropdownMenuGroup,
  DropdownMenuGroupProps,
  DropdownMenuLabel,
} from '@radix-ui/react-dropdown-menu'

import {
  ContextMenuGroup,
  ContextMenuGroupProps,
  ContextMenuLabel,
} from '@radix-ui/react-context-menu'

import * as S from '../styles'
import { MenuItem, MenuItemProps } from './Item'
import { MenuType } from '../types'
import { styled } from '@/styled-system/jsx'

type GenericGroup<T extends MenuType> = T extends 'dropdown'
  ? DropdownMenuGroupProps
  : ContextMenuGroupProps

type MenuItemsGroup<T extends MenuType> = {
  type: T
  groupName?: string
  items: MenuItemProps<T>[]
} & GenericGroup<T>

const DropdownLabel = styled(DropdownMenuLabel, S.menuLabelStyles)
const ContextLabel = styled(ContextMenuLabel, S.menuLabelStyles)

export const MenuGroup = <T extends MenuType>({
  groupName,
  items,
  type,
  ...props
}: MenuItemsGroup<T>) => {
  const Group = type === 'dropdown' ? DropdownMenuGroup : ContextMenuGroup
  const Label = type === 'dropdown' ? DropdownLabel : ContextLabel

  return (
    <Group {...props}>
      {groupName && <Label>{groupName}</Label>}
      {items.map((item) => (
        <MenuItem key={item.itemLabel} {...item} />
      ))}
    </Group>
  )
}
