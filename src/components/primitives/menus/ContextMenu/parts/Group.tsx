import { ContextMenuGroup } from '@radix-ui/react-context-menu'

import * as S from '../styles'
import { MenuItem, MenuItemProps } from './Item'

interface MenuItemsGroup {
  groupName?: string
  items: MenuItemProps[]
}

export const MenuGroup = ({ groupName, items, ...props }: MenuItemsGroup) => {
  return (
    <ContextMenuGroup {...props}>
      {groupName && <S.Label>{groupName}</S.Label>}
      {items.map((item) => (
        <MenuItem key={item.itemLabel} {...item} />
      ))}
    </ContextMenuGroup>
  )
}
